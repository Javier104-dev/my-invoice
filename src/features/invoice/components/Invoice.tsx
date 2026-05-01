import { useFieldArray, useForm, useWatch } from 'react-hook-form';

import InputTextarea from './input/InputTextarea';

import logo from '@/assets/hero.png';
import InvoiceContainer from '@/features/invoice/components/InvoiceContainer';
import EditableLabel from '@/features/invoice/components/input/EditableLabel';
import FormField from '@/features/invoice/components/input/FormField';
import Input from '@/features/invoice/components/input/Input';
import { IInvoiceFormValues } from '@/features/invoice/interfaces/IInvoiceFormValues';

const defaultValues: IInvoiceFormValues = {
  title: 'Invoice',
  company: '',
  invoiceNumber: 'LIQ-0001',
  date: { label: 'Fecha', value: new Date().toISOString().split('T')[0] },
  payTo: { label: 'Pagar a', value: { name: '', email: '' } },
  columns: {
    itemHeader: 'Concepto',
    quantityHeader: 'Cantidad',
    unitCostHeader: 'Monto',
    amountHeader: 'Total',
  },
  items: [{ desc: '', quantity: 1, price: 0 }],
  notes: { label: 'Notas', value: '' },
  terms: { label: 'Términos', value: '' },
  total: 'Total',
};

const Invoice = () => {
  const { register, control, handleSubmit } = useForm({ defaultValues });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const items = useWatch({ control, name: 'items' });
  const total = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };

  return (
    <InvoiceContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex justify-between mb-5">
            <div className="w-40">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col max-w-[45%] gap-2">
              <EditableLabel
                registration={register('title')}
                title={true}
                align="right"
              />
              <div className="relative self-end flex items-center">
                <Input registration={register('invoiceNumber')} type={'text'} />
                <span className='absolute left-2 '>#</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="flex flex-col gap-4">
              <InputTextarea
                registration={register('company')}
                placeholder="¿De quién es esto?"
              />
              <FormField
                labelPosition={'top'}
                registrationLabel={register('payTo.label')}
              >
                <InputTextarea
                  registration={register('payTo.value.name')}
                  placeholder="¿Para quién es esto?"
                />
              </FormField>
            </div>
            <div className="max-w-[35%]">
              <FormField
                labelPosition={'left'}
                registrationLabel={register('date.label')}
              >
                <Input registration={register('date.value')} type="date" />
              </FormField>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex rounded-lg bg-gray-900 gap-1">
            <div className={'flex-1 text-left font-medium'}>
              <EditableLabel
                registration={register('columns.itemHeader')}
                darkMode={true}
              />
            </div>
            <div className={'w-28 text-left font-medium'}>
              <EditableLabel
                registration={register('columns.quantityHeader')}
                darkMode={true}
              />
            </div>
            <div className={'w-28 text-left font-medium'}>
              <EditableLabel
                registration={register('columns.unitCostHeader')}
                darkMode={true}
              />
            </div>
            <div className={'w-28 text-left font-medium'}>
              <EditableLabel
                registration={register('columns.amountHeader')}
                darkMode={true}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-1">
                <div className="flex-1 text-[0px]">
                  <InputTextarea
                    registration={register(`items.${index}.desc`)}
                    placeholder="Descripción del artículo/servicio..."
                    rows={1}
                  />
                </div>
                <div className="w-28 text-left">
                  <Input
                    registration={register(`items.${index}.quantity`, {
                      valueAsNumber: true,
                    })}
                    type="number"
                    align="left"
                  />
                </div>
                <div className="w-28 relative flex items-center">
                  <span className="absolute left-2">$</span>
                  <Input
                    registration={register(`items.${index}.price`, {
                      valueAsNumber: true,
                    })}
                    type="number"
                  />
                </div>
                <div className="relative w-28 px-3 py-1.5 flex items-center group">
                  <span className="whitespace-nowrap">
                    {`${items[index]?.quantity * items[index]?.price} ${'US$'}`}
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
          onClick={() => append({ desc: '', quantity: 1, price: 0 })}
        >
          <span>Elemento en linea</span>
        </button>
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
              <EditableLabel registration={register('total')} />
            </div>
            <span className="whitespace-nowrap">{`${total.toFixed(2)} ${'US$'}`}</span>
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
