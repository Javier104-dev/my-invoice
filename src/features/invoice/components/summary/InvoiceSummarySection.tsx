import { UseFormRegister } from 'react-hook-form';

import InvoiceClosingMessage from '@/features/invoice/components/summary/InvoiceClosingMessage';
import InvoiceNotes from '@/features/invoice/components/summary/InvoiceNotes';
import InvoiceTotal from '@/features/invoice/components/summary/InvoiceTotal';
import { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  total: string;
  currency: IInvoiceFormValues['currency'];
};

const InvoiceSummarySection = ({ register, total, currency }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between mt-10">
        <InvoiceNotes register={register} />
        <InvoiceTotal register={register} total={total} currency={currency} />
      </div>
      <InvoiceClosingMessage register={register} />
    </div>
  );
};

export default InvoiceSummarySection;
