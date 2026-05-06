import { Image, Text, View } from '@react-pdf/renderer';

import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  imageUrl: string;
  companyName: string;
  title: string;
  invoiceNumber: string;
  date: string;
};

const InvoicePDFHeader = ({
  imageUrl,
  companyName,
  title,
  invoiceNumber,
  date,
}: Props) => {
  return (
    <View style={[styles.header, styles.container]}>
      <View style={styles.companyBranding}>
        <View style={styles.logoContainer}>
          <Image src={imageUrl} style={styles.logo} />
        </View>
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View style={styles.invoicePDFHeader}>
        <Text style={styles.invoiceTitle}>{title}</Text>
        <Text style={styles.invoiceNumber}>{invoiceNumber}</Text>
        <Text style={styles.invoiceDate}>{date}</Text>
      </View>
    </View>
  );
};

export default InvoicePDFHeader;
