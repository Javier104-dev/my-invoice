import type { IPDFInvoiceFormValues } from '@/features/pdf/interfaces/invoice-pdf.types';

type Props = {
  data: IPDFInvoiceFormValues;
};
declare const InvoicePDF: ({
  data,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoicePDF;
