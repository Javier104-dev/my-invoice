import type { UseFormRegister } from 'react-hook-form';

import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};
declare const InvoiceTableHeader: ({
  register,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceTableHeader;
