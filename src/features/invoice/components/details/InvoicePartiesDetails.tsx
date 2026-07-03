import type { UseFormRegister } from 'react-hook-form';

import FormField from '@/features/invoice/components/input/FormField';
import InputTextarea from '@/features/invoice/components/input/InputTextarea';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};

const InvoicePartiesDetails = ({ register }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <InputTextarea
        registration={register('companyName')}
        placeholder="¿De quién es esto?"
      />
      <FormField
        labelPosition={'top'}
        registrationLabel={register('payTo.label')}
      >
        <InputTextarea
          registration={register('payTo.value')}
          placeholder="¿Para quién es esto?"
        />
      </FormField>
    </div>
  );
};

export default InvoicePartiesDetails;
