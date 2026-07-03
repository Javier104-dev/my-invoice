import type {
  IInvoiceFormValues,
  ITable,
} from '@/features/invoice/interfaces/invoice.types';

export interface IPDFInvoiceItem {
  description: string;
  quantity: number;
  price: string;
  total: string;
}
export interface IPDFInvoiceTable extends Omit<ITable, 'items'> {
  items: IPDFInvoiceItem[];
}
export interface IPDFInvoiceFormValues extends Omit<
  IInvoiceFormValues,
  'table'
> {
  table: IPDFInvoiceTable;
}
