import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/features/pdf/styles/invoice.styles';

const BodySummarySection = () => {
  return (
    <View style={styles.paymentSummary}>
      <View style={styles.payeeSection}>
        <Text style={styles.payeeSectionLabel}>PAGAR A</Text>
        <View style={styles.goldUnderline} />
        <Text style={styles.payeeSectionName}>
          Katerine Katerine Katerine Katerine
        </Text>
      </View>
      <View style={styles.totalSection}>
        <View style={styles.totalSectionLabelBox}>
          <Text>TOTAL NETO</Text>
          <View style={styles.goldUnderline} />
        </View>
        <Text style={styles.totalSectionAmount}>$106.20</Text>
      </View>
    </View>
  );
};

export default BodySummarySection;
