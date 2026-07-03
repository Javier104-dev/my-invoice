import type { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import AddInvoiceTableRowButton from '@/features/invoice/components/table/AddInvoiceTableRowButton';
import InvoiceTableHeader from '@/features/invoice/components/table/InvoiceTableHeader';
import InvoiceTableRow from '@/features/invoice/components/table/InvoiceTableRow';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  tableItemsFieldArray: UseFieldArrayReturn<IInvoiceFormValues, 'table.items'>;
  items: IInvoiceFormValues['table']['items'];
  currency: IInvoiceFormValues['currency'];
};

const InvoiceTableSection = ({
  register,
  tableItemsFieldArray,
  items,
  currency,
}: Props) => {
  const handleRemoveItem = (index: number) => {
    tableItemsFieldArray.remove(index);
  };

  const handleAddItem = () => {
    tableItemsFieldArray.append({
      description: '',
      quantity: 1,
      price: 0,
    });
  };

  return (
    <div>
      <div className="w-full flex flex-col gap-2">
        <InvoiceTableHeader register={register} />
        <InvoiceTableRow
          register={register}
          tableItemsFieldArray={tableItemsFieldArray}
          items={items}
          currency={currency}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
      <AddInvoiceTableRowButton handleAddItem={handleAddItem} />
    </div>
  );
};

export default InvoiceTableSection;
