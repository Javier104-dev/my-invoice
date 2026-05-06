import { IInvoiceFormValues } from "@/features/invoice/interfaces/invoice.types";

export const defaultValues: IInvoiceFormValues = {
  currency: 'USD',
  imageUrl: '',
  title: 'Invoice',
  companyName: '',
  invoiceNumber: '',
  date: new Date().toLocaleDateString('en-CA'),
  payTo: { label: 'Pagar a', value: '' },
  netTotal: { label: 'Total neto' },
  table: {
    columns: {
      itemHeader: 'Concepto',
      quantityHeader: 'Cantidad',
      unitCostHeader: 'Monto',
      amountHeader: 'Total',
    },
    items: [{ description: '', quantity: 1, price: 0 }],
  },
  totalDue: { label: 'Total' },
  notes: { label: 'Detalles de pago', value: '' },
  terms: {
    label: 'Términos',
    value: '',
  },
  closingMessage: '',
};

export const options = [
  { value: 'USD', label: 'USD' },
  { value: 'USDT', label: 'USDT' },
];
