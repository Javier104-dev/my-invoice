import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  title?: boolean;
  darkMode?: boolean;
  align?: 'left' | 'right';
};
declare const EditableLabel: ({
  registration,
  title,
  darkMode,
  align,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default EditableLabel;
