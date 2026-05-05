import { Path, Svg } from '@react-pdf/renderer';

const WalletIcon = ({ size = 14, color = '#B78A2F' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default WalletIcon;
