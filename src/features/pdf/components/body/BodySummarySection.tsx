import { Text, View } from '@react-pdf/renderer';

import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';
import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  payTo: ILabelValue;
  netTotal: ILabelValue;
};

const BodySummarySection = ({ payTo, netTotal }: Props) => {
  return (
    <View style={styles.paymentSummary}>
      <View style={styles.payeeSection}>
        <Text style={styles.payeeSectionLabel}>{payTo.label}</Text>
        <View style={styles.goldUnderline} />
        <Text style={styles.payeeSectionName}>{payTo.value}</Text>
      </View>
      <View style={styles.totalSection}>
        <View style={styles.totalSectionLabelBox}>
          <Text>{netTotal.label}</Text>
          <View style={styles.goldUnderline} />
        </View>
        <Text style={styles.totalSectionAmount}>{netTotal.value}</Text>
      </View>
    </View>
  );
};

export default BodySummarySection;
