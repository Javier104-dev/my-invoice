import type { UseFormRegisterReturn } from 'react-hook-form';

import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  label: string;
  registration: UseFormRegisterReturn;
  options: ILabelValue[];
};

export const SelectInput = ({ label, registration, options }: Props) => {
  return (
    <div className="flex items-center gap-2 w-fit">
      <label htmlFor="select-input">{label}</label>
      <select
        id="select-input"
        className="w-full rounded-lg border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer appearance-none"
        {...registration}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
