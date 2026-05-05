import { IReactChildrenProps } from '@/interfaces/IReactChildren';

type PropTypes = IReactChildrenProps;

const InvoiceContainer = ({ children }: PropTypes) => {
  return <div className='w-full max-w-5xl p-8 border border-gray-200 bg-white text-gray-900'>{children}</div>;
};

export default InvoiceContainer;
