import { View } from '@react-pdf/renderer';

import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';
import BodyInfoSection from '@/features/pdf/components/body/BodyInfoSection';
import BodySummarySection from '@/features/pdf/components/body/BodySummarySection';
import BodyTableSection from '@/features/pdf/components/body/BodyTableSection';
import type { IPDFInvoiceTable } from '@/features/pdf/interfaces/invoice-pdf.types';
import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  payTo: ILabelValue;
  table: IPDFInvoiceTable;
  notes: ILabelValue;
  terms: ILabelValue;
  netTotal: ILabelValue;
  totalDue: ILabelValue;
};

const InvoiceBody = ({
  payTo,
  table,
  notes,
  terms,
  netTotal,
  totalDue,
}: Props) => {
  return (
    <View style={[styles.body, styles.container]}>
      <BodySummarySection payTo={payTo} netTotal={netTotal} />
      <BodyTableSection table={table} totalDue={totalDue} />
      <BodyInfoSection notes={notes} terms={terms} />
    </View>
  );
};

export default InvoiceBody;
