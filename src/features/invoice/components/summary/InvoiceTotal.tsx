import { UseFormRegister } from 'react-hook-form';

import EditableLabel from '@/features/invoice/components/input/EditableLabel';
import { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  total: string;
  currency: IInvoiceFormValues['currency'];
};

const InvoiceTotal = ({ register, total, currency }: Props) => {
  return (
    <div className="w-[50%] self-end flex items-center pr-10 justify-between">
      <div className="w-[50%]">
        <EditableLabel registration={register('netTotal.label')} />
      </div>
      <span className="whitespace-nowrap">{`${total} ${currency}$`}</span>
    </div>
  );
};

export default InvoiceTotal;
