import { UseFormRegister } from 'react-hook-form';

import {
  IInvoiceFormValues,
  ILabelValue,
} from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  options: ILabelValue[];
};
declare const InvoiceDetailsSection: ({
  register,
  options,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceDetailsSection;
