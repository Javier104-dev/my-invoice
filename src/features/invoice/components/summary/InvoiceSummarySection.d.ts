import type { UseFormRegister } from 'react-hook-form';

import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  total: number;
  currency: IInvoiceFormValues['currency'];
};
declare const InvoiceSummarySection: ({
  register,
  total,
  currency,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceSummarySection;
