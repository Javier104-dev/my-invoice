import { Document, Font, PDFViewer, Page } from '@react-pdf/renderer';

import { IInvoiceFormValues } from '@/features/invoice/interfaces/IInvoiceFormValues';
import InvoiceBody from '@/features/pdf/components/InvoiceBody';
import InvoiceFooter from '@/features/pdf/components/InvoiceFooter';
import InvoiceHeader from '@/features/pdf/components/InvoiceHeader';
import { styles } from '@/features/pdf/styles/invoice.styles';

Font.registerHyphenationCallback((word) => [word]);

type Props = {
  data: IInvoiceFormValues;
};

const InvoicePDF = ({ data }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceHeader
        companyName={data.companyName}
        title={data.title}
        invoiceNumber={data.invoiceNumber}
        date={data.date}
      />
      <InvoiceBody
        payTo={data.payTo}
        netTotal={data.netTotal}
        table={data.table}
        notes={data.notes}
        terms={data.terms}
        totalDue={data.totalDue}
      />
      <InvoiceFooter
        companyName={data.companyName}
        closingMessage={data.closingMessage}
      />
    </Page>
  </Document>
);

export const InvoicePDFPreview = ({ data }: Props) => (
  <PDFViewer
    style={{
      width: '100%',
      height: '100vh',
    }}
  >
    <InvoicePDF data={data} />
  </PDFViewer>
);

export default InvoicePDF;
