import { UseFormRegisterReturn } from 'react-hook-form';

import EditableLabel from '@/features/invoice/components/input/EditableLabel';
import { IReactChildrenProps } from '@/interfaces/IReactChildren';

type PropTypes = {
  labelPosition: 'top' | 'left';
  registrationLabel: UseFormRegisterReturn;
} & IReactChildrenProps;

const FormField = ({
  labelPosition,
  registrationLabel,
  children,
}: PropTypes) => {
  return (
    <div
      className='flex flex-col gap-1'
      style={{
        display: 'flex',
        flexDirection: labelPosition === 'top' ? 'column' : 'row',
      }}
    >
      <EditableLabel registration={registrationLabel} />
      {children}
    </div>
  );
};

export default FormField;
