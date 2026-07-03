import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
  title?: boolean;
  darkMode?: boolean;
  align?: 'left' | 'right';
};

const EditableLabel = ({
  registration,
  title,
  darkMode,
  align = 'left',
}: Props) => {
  const getColor = () => {
    if (darkMode) return 'text-gray-50';
    if (title) return 'text-gray-900';
    return 'text-gray-600';
  };

  const baseStyle =
    'w-full rounded-lg border border-transparent bg-transparent px-3 py-2 focus:outline-none hover:border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer';
  const fontStyle = title ? 'font-bold text-5xl' : 'font-medium';

  return (
    <input
      className={`${baseStyle} ${fontStyle} ${getColor()} ${align === 'left' ? 'text-left' : 'text-right'}`}
      type="text"
      {...registration}
    />
  );
};

export default EditableLabel;
