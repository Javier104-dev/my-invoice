interface IClientFormValues {
  name: string;
  email: string;
}

interface IItemsFormValues {
  desc: string;
  quantity: number;
  price: number;
}

interface ILabelValue<T = string> {
  label: string;
  value: T;
}

interface IColum {
  itemHeader: string;
  quantityHeader: string;
  unitCostHeader: string;
  amountHeader: string;
}

export interface IInvoiceFormValues {
  title: string;
  company: string;
  payTo: ILabelValue<IClientFormValues>;
  columns: IColum;
  invoiceNumber: string;
  date: ILabelValue;
  items: IItemsFormValues[];
  notes: ILabelValue;
  terms: ILabelValue;
  total: string;
}
