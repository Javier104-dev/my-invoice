import { ChangeEvent, RefObject } from 'react';

type Props = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare const LogoUploadInput: ({
  fileInputRef,
  handleLogoChange,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default LogoUploadInput;
