import { PDFViewer } from '@react-pdf/renderer';

import Invoice from '@/features/invoice/components/Invoice';
import { IInvoiceFormValues } from '@/features/invoice/interfaces/IInvoiceFormValues';
import InvoicePDF, {
  InvoicePDFPreview,
} from '../../features/pdf/InvoicePDF';

const defaultValues: IInvoiceFormValues = {
  title: 'Invoice',
  company: 'asda',
  invoiceNumber: 'LIQ-0001',
  date: { label: 'Fecha', value: new Date().toISOString().split('T')[0] },
  payTo: { label: 'Pagar a', value: { name: 'asd', email: 'das' } },
  columns: {
    itemHeader: 'Concepto',
    quantityHeader: 'Cantidad',
    unitCostHeader: 'Monto',
    amountHeader: 'Total',
  },
  items: [{ desc: 'adsd', quantity: 1, price: 0 }],
  notes: { label: 'Notas', value: 'asd' },
  terms: { label: 'Términos', value: 'asd' },
  total: 'Total',
};

const HomePage = () => {
  return (
    // <div className="mx-auto">
    //   <Invoice />
    // </div>

    <InvoicePDFPreview data={defaultValues} />
  );
};

export default HomePage;
