import type { UseFormRegister } from 'react-hook-form';

import EditableLabel from '@/features/invoice/components/input/EditableLabel';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';
import { formatFormCurrency } from '@/features/invoice/utils/invoice-formatters';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  total: number;
  currency: IInvoiceFormValues['currency'];
};

const InvoiceTotal = ({ register, total, currency }: Props) => {
  return (
    <div className="w-[50%] self-end flex items-center pr-10 justify-between">
      <div className="w-[50%]">
        <EditableLabel registration={register('netTotal.label')} />
      </div>
      <span className="whitespace-nowrap">{`${formatFormCurrency(total, currency)}$`}</span>
    </div>
  );
};

export default InvoiceTotal;
