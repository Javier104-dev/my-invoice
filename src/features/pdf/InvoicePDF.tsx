import { Document, Font, Page } from '@react-pdf/renderer';

import InvoiceBody from '@/features/pdf/components/InvoiceBody';
import InvoiceFooter from '@/features/pdf/components/InvoiceFooter';
import InvoicePDFHeader from '@/features/pdf/components/InvoicePDFHeader';
import type { IPDFInvoiceFormValues } from '@/features/pdf/interfaces/invoice-pdf.types';
import { styles } from '@/features/pdf/styles/invoice.styles';

Font.registerHyphenationCallback((word) => [word]);

type Props = {
  data: IPDFInvoiceFormValues;
};

const InvoicePDF = ({ data }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoicePDFHeader
        imageUrl={data.imageUrl}
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

export default InvoicePDF;
