import type { UseFormRegister } from 'react-hook-form';

import EditableLabel from '@/features/invoice/components/input/EditableLabel';
import Input from '@/features/invoice/components/input/Input';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};

const InvoiceHeaderDetails = ({ register }: Props) => {
  return (
    <div className="flex flex-col max-w-[45%] gap-2">
      <EditableLabel
        registration={register('title')}
        title={true}
        align="right"
      />
      <div className="relative self-end flex items-center">
        <Input registration={register('invoiceNumber')} type={'text'} />
        <span className="absolute left-2 ">#</span>
      </div>
    </div>
  );
};

export default InvoiceHeaderDetails;
