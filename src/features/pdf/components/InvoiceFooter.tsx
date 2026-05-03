import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  companyName: string;
  closingMessage: string;
};

const InvoiceFooter = ({ companyName, closingMessage }: Props) => {
  return (
    <View style={styles.footerSection}>
      <View style={styles.footerSectionContent}>
        <View style={styles.footerDividerSection}>
          <Text>{closingMessage}</Text>
          <Text style={styles.footerSectionAgencyName}>{companyName}</Text>
        </View>
      </View>
    </View>
  );
};

export default InvoiceFooter;
