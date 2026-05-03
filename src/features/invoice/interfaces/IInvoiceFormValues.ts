export interface IClientFormValues {
  name: string;
  email: string;
}

export interface IItemsFormValues {
  description: string;
  quantity: number;
  price: number;
  total?: string;
}

export interface ILabelValue {
  label: string;
  value?: string;
}

export interface IColum {
  itemHeader: string;
  quantityHeader: string;
  unitCostHeader: string;
  amountHeader: string;
}

export interface ITable {
  columns: IColum;
  items: IItemsFormValues[];
}

export interface IInvoiceFormValues {
  currency: string;
  imageUrl: string;
  title: string;
  companyName: string;
  invoiceNumber: string;
  date: string;
  payTo: ILabelValue;
  netTotal: ILabelValue;
  table: ITable;
  totalDue: ILabelValue;
  notes: ILabelValue;
  terms: ILabelValue;
  closingMessage: string;
}
