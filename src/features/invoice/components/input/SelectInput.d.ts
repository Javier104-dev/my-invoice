import type { UseFormRegisterReturn } from 'react-hook-form';

import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  label: string;
  registration: UseFormRegisterReturn;
  options: ILabelValue[];
};
export declare const SelectInput: ({
  label,
  registration,
  options,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default SelectInput;
