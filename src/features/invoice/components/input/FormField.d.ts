import type { UseFormRegisterReturn } from 'react-hook-form';

import type { IReactChildrenProps } from '@/interfaces/IReactChildren';

type PropTypes = {
  labelPosition: 'top' | 'left';
  registrationLabel: UseFormRegisterReturn;
} & IReactChildrenProps;
declare const FormField: ({
  labelPosition,
  registrationLabel,
  children,
}: PropTypes) => import('react/jsx-runtime').JSX.Element;
export default FormField;
