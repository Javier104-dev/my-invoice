import type { UseFormRegister } from 'react-hook-form';

import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};
declare const InvoicePartiesDetails: ({
  register,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoicePartiesDetails;
