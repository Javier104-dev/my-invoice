import type { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import Input from '@/features/invoice/components/input/Input';
import InputTextarea from '@/features/invoice/components/input/InputTextarea';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';
import { calculateLineTotal } from '@/features/invoice/utils/invoice-formatters';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  tableItemsFieldArray: UseFieldArrayReturn<IInvoiceFormValues, 'table.items'>;
  items: IInvoiceFormValues['table']['items'];
  currency: IInvoiceFormValues['currency'];
  handleRemoveItem: (index: number) => void;
};

const InvoiceTableRow = ({
  register,
  tableItemsFieldArray,
  items,
  currency,
  handleRemoveItem,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {tableItemsFieldArray.fields.map((field, index) => (
        <div key={field.id} className="flex gap-1 items-start">
          <div className="flex-1 text-[0px]">
            <InputTextarea
              registration={register(`table.items.${index}.description`)}
              placeholder="Descripción del artículo/servicio..."
              rows={1}
            />
          </div>
          <div className="w-28 text-left">
            <Input
              registration={register(`table.items.${index}.quantity`, {
                valueAsNumber: true,
              })}
              type="number"
              align="left"
            />
          </div>
          <div className="w-28 relative flex items-center">
            <span className="absolute left-2">$</span>
            <Input
              registration={register(`table.items.${index}.price`, {
                valueAsNumber: true,
              })}
              type="number"
              step={'any'}
            />
          </div>
          <div className="relative w-28 px-3 py-1.5 flex items-center group">
            <span className="whitespace-nowrap">
              {`${calculateLineTotal(
                items[index]?.quantity,
                items[index]?.price,
              ).toFixed(2)} ${currency}`}
            </span>
            <button
              className="absolute right-4 cursor-pointer text-gray-400 hover:text-red-600 rounded transition-colors invisible group-hover:visible font-bold"
              type="button"
              onClick={() => handleRemoveItem(index)}
            >
              <span>X</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvoiceTableRow;
