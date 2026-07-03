import { pdf } from '@react-pdf/renderer';
import { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';

import InvoiceHeaderSection from './header/InvoiceHeaderSection';

import InvoiceContainer from '@/features/invoice/components/InvoiceContainer';
import InvoiceSubmitButton from '@/features/invoice/components/InvoiceSubmitButton';
import InvoiceDetailsSection from '@/features/invoice/components/details/InvoiceDetailsSection';
import InvoiceSummarySection from '@/features/invoice/components/summary/InvoiceSummarySection';
import InvoiceTableSection from '@/features/invoice/components/table/InvoiceTableSection';
import {
  defaultValues,
  options,
} from '@/features/invoice/constants/invoicedefaults';
import { STORAGE } from '@/features/invoice/constants/storage';
import type { IInvoiceFormValues } from '@/features/invoice/interfaces/invoice.types';
import {
  calculateSubtotal,
  formatInvoiceForPDF,
} from '@/features/invoice/utils/invoice-formatters';
import InvoicePDF from '@/features/pdf/InvoicePDF';

const Invoice = () => {
  const saved = localStorage.getItem(STORAGE.FORM);
  const initialValues = saved ? JSON.parse(saved) : defaultValues;
  const { register, control, handleSubmit, setValue } =
    useForm<IInvoiceFormValues>({
      defaultValues: initialValues,
    });

  const [isGenerating, setIsGenerating] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const tableItemsFieldArray = useFieldArray({
    control,
    name: 'table.items',
  });

  const formSnapshot = useWatch({ control });
  const items = useWatch({ control, name: 'table.items' });
  const imageUrl = useWatch({ control, name: 'imageUrl' });
  const currency = useWatch({ control, name: 'currency' });

  const imageSrc = imageUrl
    ? (localStorage.getItem(`${STORAGE.LOGO_PREFIX}${imageUrl}`) ?? '')
    : '';
  const total = calculateSubtotal(items);

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_LOGO_SIZE = 768 * 1024;

    if (file.size > MAX_LOGO_SIZE) {
      alert(
        'The selected image is too large. Please choose one that is 768KB or smaller.',
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const base64 = reader.result as string;
        const hash = `${file.name.replaceAll(/[^a-zA-Z0-9]/g, '')}_${Date.now()}`;
        localStorage.setItem(`${STORAGE.LOGO_PREFIX}${hash}`, base64);
        setValue('imageUrl', hash);
      } catch {
        alert(
          'Unable to save the image. Storage may be full or the file may be too large.',
        );
      }
    };

    reader.onerror = () => {
      alert('Failed to read the selected image.');
    };

    reader.readAsDataURL(file);
  };

  const handleLogoRemove = () => {
    if (!imageUrl) return;

    localStorage.removeItem(`${STORAGE.LOGO_PREFIX}${imageUrl}`);
    setValue('imageUrl', '');
  };

  const onSubmit = async (data: IInvoiceFormValues) => {
    setIsGenerating(true);
    try {
      const formatedData = formatInvoiceForPDF(data);

      const blob = await pdf(<InvoicePDF data={formatedData} />).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = data.invoiceNumber
        ? `invoice-${data.invoiceNumber}.pdf`
        : 'invoice.pdf';
      link.click();

      URL.revokeObjectURL(url);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(STORAGE.FORM, JSON.stringify(formSnapshot));
    }, 500);
    return () => clearTimeout(timeout);
  }, [formSnapshot]);

  return (
    <InvoiceContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InvoiceHeaderSection
          fileInputRef={fileInputRef}
          handleLogoChange={handleLogoChange}
          imageSrc={imageSrc}
          handleLogoRemove={handleLogoRemove}
          register={register}
        />
        <InvoiceDetailsSection register={register} options={options} />
        <InvoiceTableSection
          register={register}
          tableItemsFieldArray={tableItemsFieldArray}
          items={items}
          currency={currency}
        />
        <InvoiceSummarySection
          register={register}
          total={total}
          currency={currency}
        />
        <InvoiceSubmitButton isGenerating={isGenerating} />
      </form>
    </InvoiceContainer>
  );
};

export default Invoice;
