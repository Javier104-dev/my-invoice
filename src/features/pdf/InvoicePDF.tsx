import { Document, Font, PDFViewer, Page } from '@react-pdf/renderer';

import InvoiceBody from '@/features/pdf/components/InvoiceBody';
import InvoiceFooter from '@/features/pdf/components/InvoiceFooter';
import InvoiceHeader from '@/features/pdf/components/InvoiceHeader';
import { styles } from '@/features/pdf/styles/invoice.styles';

Font.registerHyphenationCallback((word) => [word]);

const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceHeader />
      <InvoiceBody />
      <InvoiceFooter />
    </Page>
  </Document>
);

export const InvoicePDFPreview = () => (
  <PDFViewer
    style={{
      width: '100%',
      height: '100vh',
    }}
  >
    <InvoicePDF />
  </PDFViewer>
);

export default InvoicePDF;
