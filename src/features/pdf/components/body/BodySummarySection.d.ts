import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  payTo: ILabelValue;
  netTotal: ILabelValue;
};
declare const BodySummarySection: ({
  payTo,
  netTotal,
}: Props) => import('react/jsx-runtime').JSX.Element;
export default BodySummarySection;
