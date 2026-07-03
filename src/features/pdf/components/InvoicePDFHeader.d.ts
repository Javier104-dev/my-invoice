type Props = {
  imageUrl: string;
  companyName: string;
  title: string;
  invoiceNumber: string;
  date: string;
};
declare const InvoicePDFHeader: ({
  imageUrl,
  companyName,
  title,
  invoiceNumber,
  date,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default InvoicePDFHeader;
