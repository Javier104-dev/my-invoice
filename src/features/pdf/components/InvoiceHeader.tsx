import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/features/pdf/styles/invoice.styles';

const InvoiceHeader = () => {
  return (
    <View style={[styles.header, styles.container]}>
      <View style={styles.logoBox}>
        <View style={styles.logo} />
        <Text style={styles.companyName}>ESTUDIO SUR</Text>
      </View>
      <View style={styles.invoiceHeader}>
        <Text style={styles.invoiceTitle}>LIQUIDACION DE INGRESOS</Text>
        <Text style={styles.invoiceNumber}># LIQ-0001</Text>
        <Text style={styles.invoiceDate}>28 de Abril - 2026</Text>
      </View>
    </View>
  );
};

export default InvoiceHeader;
