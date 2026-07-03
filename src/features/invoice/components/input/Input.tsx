import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  type: 'text' | 'number' | 'date';
  align?: 'left' | 'right';
  step?: 'any' | number;
};

const Input = ({ registration, type, align = 'right', step = 1 }: Props) => {
  return (
    <input
      step={step}
      className={`w-full rounded-lg border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${align === 'left' ? 'text-left' : 'text-right'}`}
      {...registration}
      type={type}
    />
  );
};

export default Input;
