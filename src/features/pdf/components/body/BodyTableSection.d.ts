import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';
import type { IPDFInvoiceTable } from '@/features/pdf/interfaces/invoice-pdf.types';

type Props = {
  table: IPDFInvoiceTable;
  totalDue: ILabelValue;
};
declare const BodyTableSection: ({
  table,
  totalDue,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default BodyTableSection;
