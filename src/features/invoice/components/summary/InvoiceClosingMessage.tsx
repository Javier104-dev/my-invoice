import { UseFormRegister } from 'react-hook-form';

import InputTextarea from '@/features/invoice/components/input/InputTextarea';
import { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};

const InvoiceClosingMessage = ({ register }: Props) => {
  return (
    <div className="w-full max-w-75 self-center">
      <InputTextarea
        registration={register('closingMessage')}
        placeholder="Mensaje de cierre: texto que aparecerá al pie del documento"
      />
    </div>
  );
};

export default InvoiceClosingMessage;
