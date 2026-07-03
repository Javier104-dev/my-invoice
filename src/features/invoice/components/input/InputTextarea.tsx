import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  placeholder: string;
  rows?: number;
};

const InputTextarea = ({ registration, placeholder, rows = 2 }: Props) => {
  return (
    <textarea
      rows={rows}
      className="w-full rounded-lg border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none overflow-hidden leading-5"
      {...registration}
      placeholder={placeholder}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = 'auto';
        target.style.height = `${target.scrollHeight}px`;
      }}
    />
  );
};

export default InputTextarea;
