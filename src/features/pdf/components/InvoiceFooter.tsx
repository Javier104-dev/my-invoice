import { styles } from "@/features/pdf/styles/invoice.styles";
import { Text, View } from "@react-pdf/renderer";

const InvoiceFooter = () => {
  return (
    <View style={styles.footerSection}>
      <View style={styles.footerSectionContent}>
        <View style={styles.footerDividerSection}>
          <Text>AGRADECEMOS SU CONFIANZA</Text>
          <Text style={styles.footerSectionAgencyName}>ESTUDIO SUR</Text>
        </View>
      </View>
    </View>
  );
};

export default InvoiceFooter;
