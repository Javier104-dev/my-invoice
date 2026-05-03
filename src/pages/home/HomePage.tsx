import Invoice from '@/features/invoice/components/Invoice';
import { InvoicePDFPreview } from '@/features/pdf/InvoicePDF';

const HomePage = () => {
  return (
    <div className="mx-auto">
      <Invoice />
    </div>

    // <InvoicePDFPreview data={example} />
  );
};

export default HomePage;
