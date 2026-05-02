import { Text, View } from '@react-pdf/renderer';

import FileTextIcon from '@/features/pdf/assets/FileTextIcon';
import WalletIcon from '@/features/pdf/assets/WalletIcon';
import { styles } from '@/features/pdf/styles/invoice.styles';

const BodyInfoSection = () => {
  return (
    <View style={styles.additionalInfoSection}>
      <View style={styles.additionalInfoColumns}>
        <WalletIcon size={20} />
        <View style={styles.additionalInfoColumnsContent}>
          <Text style={styles.additionalInfoColumnsTitle}>
            DETALLES DE PAGO
          </Text>
          <View style={styles.goldUnderline} />
          <Text style={styles.additionalInfoColumnsText}>retertertfhfhdf</Text>
        </View>
      </View>
      <View style={styles.additionalInfoColumns}>
        <FileTextIcon size={20} />
        <View style={styles.additionalInfoColumnsContent}>
          <Text style={styles.additionalInfoColumnsTitle}>TERMINOS</Text>
          <View style={styles.goldUnderline} />
          <Text style={styles.additionalInfoColumnsText}>
            Este documento corresponde a una liquidación informativa de ingresos
            generados en plataforma. No constituye comprobante fiscal ni
            reemplaza una factura emitida por el prestador del servicio.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BodyInfoSection;
