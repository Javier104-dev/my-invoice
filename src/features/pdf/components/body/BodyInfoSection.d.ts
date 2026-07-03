import type { ILabelValue } from '@/features/invoice/interfaces/invoice.types';

type Props = {
  notes: ILabelValue;
  terms: ILabelValue;
};
declare const BodyInfoSection: ({
  notes,
  terms,
}: Props) => import('react/jsx-runtime').JSX.Element | null;
export default BodyInfoSection;
