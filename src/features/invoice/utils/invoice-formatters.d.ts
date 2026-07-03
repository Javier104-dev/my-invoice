import type {
  IInvoiceFormValues,
  IItemsFormValues,
} from '@/features/invoice/interfaces/invoice.types';
import type { IPDFInvoiceFormValues } from '@/features/pdf/interfaces/invoice-pdf.types';

export declare const formatDate: (dateString: string) => string;
export declare const calculateLineTotal: (
  quantity: number,
  price: number,
) => number;
export declare const calculateSubtotal: (items: IItemsFormValues[]) => number;
export declare const formatInvoiceForPDF: (
  data: IInvoiceFormValues,
) => IPDFInvoiceFormValues;
