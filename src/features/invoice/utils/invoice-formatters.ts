import Decimal from 'decimal.js';

import { STORAGE } from '@/features/invoice/constants/storage';
import type {
  IInvoiceFormValues,
  IItemsFormValues,
} from '@/features/invoice/interfaces/invoice.types';
import type { IPDFInvoiceFormValues } from '@/features/pdf/interfaces/invoice-pdf.types';

const sanitizeNumber = (value: number): number =>
  Number.isFinite(value) ? value : 0;

export const formatDate = (dateString: string): string => {
  if (!dateString) return '';

  const [year, month, day] = dateString.split('-').map(Number);

  if (!year || !month || !day) return 'Invalid date';

  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  return `${day} de ${meses[month - 1]} - ${year}`;
};

export const calculateLineTotal = (quantity: number, price: number): number => {
  return new Decimal(sanitizeNumber(price))
    .times(sanitizeNumber(quantity))
    .toNumber();
};

export const calculateSubtotal = (items: IItemsFormValues[]): number => {
  return items
    .reduce(
      (sum, item) => sum.plus(calculateLineTotal(item.quantity, item.price)),
      new Decimal(0),
    )
    .toNumber();
};

export const toFixedDecimal = (value: number): string => {
  return new Decimal(value).toFixed(2);
};

export const formatFormCurrency = (value: number, currency: string): string => {
  return `${toFixedDecimal(value)} ${currency}`;
};

const formatPDFCurrency = (currency: string, value: number): string => {
  return `${currency} ${toFixedDecimal(sanitizeNumber(value))}`;
};

export const formatInvoiceForPDF = (
  data: IInvoiceFormValues,
): IPDFInvoiceFormValues => {
  const logoBase64 = localStorage.getItem(
    `${STORAGE.LOGO_PREFIX}${data.imageUrl}`,
  );
  const formattedDate = formatDate(data.date);
  const subtotal = calculateSubtotal(data.table.items);
  const formattedTotal = formatPDFCurrency(data.currency, subtotal);

  return {
    ...data,
    imageUrl: logoBase64 || '',
    invoiceNumber: data.invoiceNumber ? `# ${data.invoiceNumber}` : '',
    date: formattedDate,
    netTotal: {
      ...data.netTotal,
      value: formattedTotal,
    },
    totalDue: {
      ...data.totalDue,
      value: formattedTotal,
    },
    table: {
      ...data.table,
      items: data.table.items.map((item) => ({
        ...item,
        quantity: sanitizeNumber(item.quantity),
        price: formatPDFCurrency(data.currency, item.price),
        total: formatPDFCurrency(
          data.currency,
          calculateLineTotal(item.quantity, item.price),
        ),
      })),
    },
  };
};
