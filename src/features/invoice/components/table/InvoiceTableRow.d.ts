import type { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  register: UseFormRegister<IInvoiceFormValues>;
  tableItemsFieldArray: UseFieldArrayReturn<IInvoiceFormValues, 'table.items'>;
  items: IInvoiceFormValues['table']['items'];
  currency: IInvoiceFormValues['currency'];
  handleRemoveItem: (index: number) => void;
};
declare const InvoiceTableRow: ({
  register,
  tableItemsFieldArray,
  items,
  currency,
  handleRemoveItem,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoiceTableRow;
