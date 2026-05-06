import { UseFormRegister } from 'react-hook-form';

import FormField from '@/features/invoice/components/input/FormField';
import InputTextarea from '@/features/invoice/components/input/InputTextarea';
import { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};

const InvoiceNotes = ({ register }: Props) => {
  return (
    <div className="w-[50%] flex flex-col gap-4">
      <div className="flex flex-col">
        <FormField
          labelPosition={'top'}
          registrationLabel={register('notes.label')}
        >
          <InputTextarea
            registration={register('notes.value')}
            placeholder="Notas: cualquier información relevante que no esté ya cubierta"
          />
        </FormField>
      </div>
      <div className="flex flex-col">
        <FormField
          labelPosition={'top'}
          registrationLabel={register('terms.label')}
        >
          <InputTextarea
            registration={register('terms.value')}
            placeholder="Términos y condiciones: cargos por pagos atrasados, métodos de pago, calendario de entrega"
          />
        </FormField>
      </div>
    </div>
  );
};

export default InvoiceNotes;
