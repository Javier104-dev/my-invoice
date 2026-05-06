type Props = {
  isGenerating: boolean;
};

const InvoiceSubmitButton = ({ isGenerating }: Props) => {
  return (
    <button
      className="cursor-pointer w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-lg mt-8"
      type="submit"
      disabled={isGenerating}
    >
      <span>{isGenerating ? 'Generating...' : 'Download PDF'}</span>
    </button>
  );
};

export default InvoiceSubmitButton;
