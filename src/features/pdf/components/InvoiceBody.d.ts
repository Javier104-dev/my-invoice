import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';
import type { IPDFInvoiceTable } from '@/features/pdf/interfaces/invoice-pdf.types';

type Props = {
  payTo: ILabelValue;
  table: IPDFInvoiceTable;
  notes: ILabelValue;
  terms: ILabelValue;
  netTotal: ILabelValue;
  totalDue: ILabelValue;
};
declare const InvoiceBody: ({
  payTo,
  table,
  notes,
  terms,
  netTotal,
  totalDue,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceBody;
