import type { ChangeEvent, RefObject } from 'react';
import type { UseFormRegister } from 'react-hook-form';

import InvoiceHeaderDetails from '@/features/invoice/components/header/InvoiceHeaderDetails';
import InvoiceLogo from '@/features/invoice/components/header/InvoiceLogo';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string;
  handleLogoRemove: () => void;
  register: UseFormRegister<IInvoiceFormValues>;
};

const InvoiceHeaderSection = ({
  fileInputRef,
  handleLogoChange,
  imageSrc,
  handleLogoRemove,
  register,
}: Props) => {
  return (
    <div className="flex justify-between mb-5">
      <InvoiceLogo
        fileInputRef={fileInputRef}
        handleLogoChange={handleLogoChange}
        imageSrc={imageSrc}
        handleLogoRemove={handleLogoRemove}
      />
      <InvoiceHeaderDetails register={register} />
    </div>
  );
};

export default InvoiceHeaderSection;
