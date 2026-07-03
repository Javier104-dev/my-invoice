import type { ChangeEvent, RefObject } from 'react';
import type { UseFormRegister } from 'react-hook-form';

import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string;
  handleLogoRemove: () => void;
  register: UseFormRegister<IInvoiceFormValues>;
};
declare const InvoiceHeaderSection: ({
  fileInputRef,
  handleLogoChange,
  imageSrc,
  handleLogoRemove,
  register,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceHeaderSection;
