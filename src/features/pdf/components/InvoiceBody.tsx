import { View } from '@react-pdf/renderer';

import BodyInfoSection from '@/features/pdf/components/body/BodyInfoSection';
import BodySummarySection from '@/features/pdf/components/body/BodySummarySection';
import BodyTableSection from '@/features/pdf/components/body/BodyTableSection';
import { styles } from '@/features/pdf/styles/invoice.styles';

const InvoiceBody = () => {
  return (
    <View style={[styles.body, styles.container]}>
      <BodySummarySection />
      <BodyTableSection />
      <BodyInfoSection />
    </View>
  );
};

export default InvoiceBody;
