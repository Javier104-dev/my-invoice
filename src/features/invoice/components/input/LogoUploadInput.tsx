import type { ChangeEvent, RefObject } from 'react';

type Props = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LogoUploadInput = ({ fileInputRef, handleLogoChange }: Props) => {
  return (
    <input
      ref={fileInputRef}
      type="file"
      accept=".jpg,.jpeg,.png"
      onChange={handleLogoChange}
      hidden
    />
  );
};

export default LogoUploadInput;
