import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  companyName: string;
  title: string;
  invoiceNumber: string;
  date: string;
};

const InvoiceHeader = ({ companyName, title, invoiceNumber, date }: Props) => {
  return (
    <View style={[styles.header, styles.container]}>
      <View style={styles.logoBox}>
        <View style={styles.logo} />
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View style={styles.invoiceHeader}>
        <Text style={styles.invoiceTitle}>{title}</Text>
        <Text style={styles.invoiceNumber}>{invoiceNumber}</Text>
        <Text style={styles.invoiceDate}>{date}</Text>
      </View>
    </View>
  );
};

export default InvoiceHeader;
