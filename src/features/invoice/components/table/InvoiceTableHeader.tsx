import { UseFormRegister } from 'react-hook-form';

import { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';
import EditableLabel from '@/features/invoice/components/input/EditableLabel';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
};

const InvoiceTableHeader = ({ register }: Props) => {
  return (
    <div className="flex rounded-lg bg-gray-900 gap-1">
      <div className={'flex-1 text-left font-medium'}>
        <EditableLabel
          registration={register('table.columns.itemHeader')}
          darkMode={true}
        />
      </div>
      <div className={'w-28 text-left font-medium'}>
        <EditableLabel
          registration={register('table.columns.quantityHeader')}
          darkMode={true}
        />
      </div>
      <div className={'w-28 text-left font-medium'}>
        <EditableLabel
          registration={register('table.columns.unitCostHeader')}
          darkMode={true}
        />
      </div>
      <div className={'w-28 text-left font-medium'}>
        <EditableLabel
          registration={register('table.columns.amountHeader')}
          darkMode={true}
        />
      </div>
    </div>
  );
};

export default InvoiceTableHeader;
