type Props = {
  handleAddItem: () => void;
};

const AddInvoiceTableRowButton = ({ handleAddItem }: Props) => {
  return (
    <button
      className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors mt-2"
      type="button"
      onClick={handleAddItem}
    >
      <span>Elemento en linea</span>
    </button>
  );
};

export default AddInvoiceTableRowButton;
