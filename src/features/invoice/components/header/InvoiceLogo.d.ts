import { ChangeEvent, RefObject } from 'react';

type Props = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string;
  handleLogoRemove: () => void;
};
declare const InvoiceLogo: ({
  fileInputRef,
  handleLogoChange,
  imageSrc,
  handleLogoRemove,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceLogo;
