import { Text, View } from '@react-pdf/renderer';

import { ILabelValue } from '../../../invoice/interfaces/invoice.types';
import FileTextIcon from '@/features/pdf/assets/FileTextIcon';
import WalletIcon from '@/features/pdf/assets/WalletIcon';
import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  notes: ILabelValue;
  terms: ILabelValue;
};

const BodyInfoSection = ({ notes, terms }: Props) => {
  return (
    <View style={styles.additionalInfoSection}>
      <View style={styles.additionalInfoColumns}>
        <WalletIcon size={20} />
        <View style={styles.additionalInfoColumnsContent}>
          <Text style={styles.additionalInfoColumnsTitle}>{notes.label}</Text>
          <View style={styles.goldUnderline} />
          <Text style={styles.additionalInfoColumnsText}>{notes.value}</Text>
        </View>
      </View>
      <View style={styles.additionalInfoColumns}>
        <FileTextIcon size={20} />
        <View style={styles.additionalInfoColumnsContent}>
          <Text style={styles.additionalInfoColumnsTitle}>{terms.label}</Text>
          <View style={styles.goldUnderline} />
          <Text style={styles.additionalInfoColumnsText}>{terms.value}</Text>
        </View>
      </View>
    </View>
  );
};

export default BodyInfoSection;
