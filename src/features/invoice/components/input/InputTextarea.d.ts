import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  placeholder: string;
  rows?: number;
};
declare const InputTextarea: ({
  registration,
  placeholder,
  rows,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InputTextarea;
