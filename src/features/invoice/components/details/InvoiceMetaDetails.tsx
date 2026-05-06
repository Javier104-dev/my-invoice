import { UseFormRegister } from 'react-hook-form';

import Input from '@/features/invoice/components/input/Input';
import SelectInput from '@/features/invoice/components/input/SelectInput';
import {
  IInvoiceFormValues,
  ILabelValue,
} from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  options: ILabelValue[];
};

const InvoiceMetaDetails = ({ register, options }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-end">
      <Input registration={register('date')} type="date" />
      <SelectInput
        label="Divisa"
        registration={register('currency')}
        options={options}
      />
    </div>
  );
};

export default InvoiceMetaDetails;
