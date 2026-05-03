import { ChangeEvent, useEffect, useRef } from 'react';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';

import InputTextarea from './input/InputTextarea';

import InvoiceContainer from '@/features/invoice/components/InvoiceContainer';
import EditableLabel from '@/features/invoice/components/input/EditableLabel';
import FormField from '@/features/invoice/components/input/FormField';
import Input from '@/features/invoice/components/input/Input';
import {
  IInvoiceFormValues,
  IItemsFormValues,
} from '@/features/invoice/interfaces/IInvoiceFormValues';

const defaultValues: IInvoiceFormValues = {
  currency: 'USD',
  imageUrl: '',
  title: 'Invoice',
  companyName: '',
  invoiceNumber: '',
  date: new Date().toISOString().split('T')[0],
  payTo: { label: 'Pagar a', value: '' },
  netTotal: { label: 'Total neto' },
  table: {
    columns: {
      itemHeader: 'Concepto',
      quantityHeader: 'Cantidad',
      unitCostHeader: 'Monto',
      amountHeader: 'Total',
    },
    items: [{ description: '', quantity: 1, price: 0 }],
  },
  totalDue: { label: 'Total' },
  notes: { label: 'Detalles de pago', value: '' },
  terms: {
    label: 'Términos',
    value: '',
  },
  closingMessage: '',
};

const STORAGE_KEY = 'invoice-form';
const LOGO_KEY = 'ls.logo-';

const Invoice = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialValues = saved ? JSON.parse(saved) : defaultValues;
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValues: initialValues,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'table.items',
  });

  const values = useWatch({ control });
  const { table: { items } = {}, imageUrl, currency } = values;
  const imageSrc = imageUrl
    ? (localStorage.getItem(`${LOGO_KEY}${imageUrl}`) ?? '')
    : '';
  const total = items?.reduce(
    (sum: number, i: IItemsFormValues) =>
      sum + (Number(i.quantity) || 0) * (Number(i.price) || 0),
    0,
  );

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      const hash = file.name.replaceAll(/[^a-zA-Z0-9]/g, '');
      localStorage.setItem(`${LOGO_KEY}${hash}`, base64);
      setValue('imageUrl', hash);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  return (
    <InvoiceContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex justify-between mb-5">
            <div className="w-[150px] overflow-hidden flex justify-center items-center">
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleLogoChange}
                hidden
              />
              {!imageUrl && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full max-w-[150px] h-[150px] cursor-pointer"
                >
                  <div className="w-full h-full rounded-lg border border-gray-300 flex items-center justify-center text-gray-300">
                    Subir logo
                  </div>
                </button>
              )}
              {imageUrl && (
                <img
                  src={imageSrc}
                  alt="Logo"
                  className="object-cover object-center"
                />
              )}
            </div>
            <div className="flex flex-col max-w-[45%] gap-2">
              <EditableLabel
                registration={register('title')}
                title={true}
                align="right"
              />
              <div className="relative self-end flex items-center">
                <Input registration={register('invoiceNumber')} type={'text'} />
                <span className="absolute left-2 ">#</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="flex flex-col gap-4">
              <InputTextarea
                registration={register('companyName')}
                placeholder="¿De quién es esto?"
              />
              <FormField
                labelPosition={'top'}
                registrationLabel={register('payTo.label')}
              >
                <InputTextarea
                  registration={register('payTo.value')}
                  placeholder="¿Para quién es esto?"
                />
              </FormField>
            </div>
            <div>
              <Input registration={register('date')} type="date" />
              <div>
                <div className="flex">
                  <span>Divisa</span>
                  <select {...register('currency')}>
                    <option value="USDT">USDT</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex rounded-lg bg-gray-900 gap-1">
            <div className={'flex-1 text-left font-medium'}>
              <EditableLabel
                registration={register('table.columns.itemHeader')}
                darkMode={true}
              />
            </div>
            <div className={'w-28 text-left font-medium'}>
              <EditableLabel
                registration={register('table.columns.quantityHeader')}
                darkMode={true}
              />
            </div>
            <div className={'w-28 text-left font-medium'}>
              <EditableLabel
                registration={register('table.columns.unitCostHeader')}
                darkMode={true}
              />
            </div>
            <div className={'w-28 text-left font-medium'}>
              <EditableLabel
                registration={register('table.columns.amountHeader')}
                darkMode={true}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-1">
                <div className="flex-1 text-[0px]">
                  <InputTextarea
                    registration={register(`table.items.${index}.description`)}
                    placeholder="Descripción del artículo/servicio..."
                    rows={1}
                  />
                </div>
                <div className="w-28 text-left">
                  <Input
                    registration={register(`table.items.${index}.quantity`, {
                      valueAsNumber: true,
                    })}
                    type="number"
                    align="left"
                  />
                </div>
                <div className="w-28 relative flex items-center">
                  <span className="absolute left-2">$</span>
                  <Input
                    registration={register(`table.items.${index}.price`, {
                      valueAsNumber: true,
                    })}
                    type="number"
                  />
                </div>
                <div className="relative w-28 px-3 py-1.5 flex items-center group">
                  <span className="whitespace-nowrap">
                    {`${(Number(items[index]?.quantity) || 0) * (Number(items[index]?.price) || 0)} ${currency}$`}
                  </span>
                  <button
                    className="absolute right-4 cursor-pointer text-gray-400 hover:text-red-600 rounded transition-colors invisible group-hover:visible font-bold"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <span>X</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors mt-2"
          type="button"
          onClick={() => append({ description: '', quantity: 1, price: 0 })}
        >
          <span>Elemento en linea</span>
        </button>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between mt-10">
            <div className="w-[50%] flex flex-col gap-5">
              <div className="flex flex-col">
                <FormField
                  labelPosition={'top'}
                  registrationLabel={register('notes.label')}
                >
                  <InputTextarea
                    registration={register('notes.value')}
                    placeholder="Notas: cualquier información relevante que no esté ya cubierta"
                  />
                </FormField>
              </div>
              <div className="flex flex-col">
                <FormField
                  labelPosition={'top'}
                  registrationLabel={register('terms.label')}
                >
                  <InputTextarea
                    registration={register('terms.value')}
                    placeholder="Términos y condiciones: cargos por pagos atrasados, métodos de pago, calendario de entrega"
                  />
                </FormField>
              </div>
            </div>
            <div className="w-[50%] self-end flex items-center pr-10 justify-between">
              <div className="w-[50%]">
                <EditableLabel registration={register('netTotal.label')} />
              </div>
              <span className="whitespace-nowrap">{`${total.toFixed(2)} ${currency}$`}</span>
            </div>
          </div>
          <div className="w-full max-w-[300px] self-center">
            <InputTextarea
              registration={register('closingMessage')}
              placeholder="Mensaje de cierre: texto que aparecerá al pie del documento"
            />
          </div>
        </div>
        <button
          className="cursor-pointer w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-lg mt-8"
          type="submit"
        >
          <span>Descargar</span>
        </button>
      </form>
    </InvoiceContainer>
  );
};

export default Invoice;
