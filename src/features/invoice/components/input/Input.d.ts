import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  type: 'text' | 'number' | 'date';
  align?: 'left' | 'right';
  step?: 'any' | number;
};
declare const Input: ({
  registration,
  type,
  align,
  step,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default Input;
