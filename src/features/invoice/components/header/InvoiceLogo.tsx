import { ChangeEvent, RefObject } from 'react';

import LogoUploadInput from '@/features/invoice/components/input/LogoUploadInput';

type Props = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string;
  handleLogoRemove: () => void;
};

const InvoiceLogo = ({
  fileInputRef,
  handleLogoChange,
  imageSrc,
  handleLogoRemove,
}: Props) => {
  return (
    <div className="w-[150px] overflow-hidden flex justify-center items-center">
      <LogoUploadInput
        fileInputRef={fileInputRef}
        handleLogoChange={handleLogoChange}
      />
      {!imageSrc && (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full max-w-[150px] h-[150px] cursor-pointer"
        >
          <div className="w-full h-full rounded-lg border border-gray-300 flex items-center justify-center text-gray-300">
            Subir logo
          </div>
        </button>
      )}
      {imageSrc && (
        <div className="relative">
          <img
            src={imageSrc}
            alt="Logo"
            className="object-cover object-center"
          />
          <div className="absolute top-0">
            <button
              className="cursor-pointer w-full px-3 py-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-lg"
              type="button"
              onClick={handleLogoRemove}
            >
              <span>X</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceLogo;
