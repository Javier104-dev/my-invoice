import {
  IInvoiceFormValues,
  IItemsFormValues,
} from '../interfaces/invoice.types';

import { STORAGE } from '@/features/invoice/constants/storage';
import { IPDFInvoiceFormValues } from '@/features/pdf/interfaces/invoice-pdf.types';

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
  return (Number(quantity) || 0) * (Number(price) || 0);
};

const calculateSubtotal = (items: IItemsFormValues[]): number => {
  return items.reduce(
    (sum, item) => sum + calculateLineTotal(item.quantity, item.price),
    0,
  );
};

export const formatSubtotal = (items: IItemsFormValues[]): string =>
  calculateSubtotal(items).toFixed(2);

const formatCurrency = (currency: string, value: number) =>
  `${currency} ${value.toFixed(2)}`;

export const formatInvoiceForPDF = (
  data: IInvoiceFormValues,
): IPDFInvoiceFormValues => {
  const logoBase64 = localStorage.getItem(
    `${STORAGE.LOGO_PREFIX}${data.imageUrl}`,
  );
  const formatedDate = formatDate(data.date);
  const subtotal = calculateSubtotal(data.table.items);
  const formattedTotal = formatCurrency(data.currency, subtotal);

  return {
    ...data,
    imageUrl: logoBase64 || '',
    invoiceNumber: `# ${data.invoiceNumber}`,
    date: formatedDate,
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
        price: formatCurrency(data.currency, item.price),
        total: formatCurrency(
          data.currency,
          calculateLineTotal(item.quantity, item.price),
        ),
      })),
    },
  };
};
