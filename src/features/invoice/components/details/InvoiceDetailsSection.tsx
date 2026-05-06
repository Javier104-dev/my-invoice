import { UseFormRegister } from 'react-hook-form';

import InvoiceMetaDetails from '@/features/invoice/components/details/InvoiceMetaDetails';
import InvoicePartiesDetails from '@/features/invoice/components/details/InvoicePartiesDetails';
import {
  IInvoiceFormValues,
  ILabelValue,
} from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  options: ILabelValue[];
};

const InvoiceDetailsSection = ({ register, options }: Props) => {
  return (
    <div className="flex justify-between mb-8">
      <InvoicePartiesDetails register={register} />
      <InvoiceMetaDetails register={register} options={options} />
    </div>
  );
};

export default InvoiceDetailsSection;
