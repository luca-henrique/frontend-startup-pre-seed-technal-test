"use client"

import { Button } from "@/components/ui/button"
import { TextInputArea } from "../../atoms/input-text-area/input-text-area"
import { TextInput } from "../../atoms/input/input"

import { useOrderForm } from "./use-order"

export const OrderForm = () => {


  const { control, append, appendMaterials, fields, materialsFields } = useOrderForm();


  return (
    <div className="flex flex-col min-w-[371px]">
      <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Nova Ordem de Serviço
      </h2>
      <TextInput control={control} label="Nome da Ordem de Serviço" name="title" />
      <TextInputArea label="Descrição do Serviço" name="description" control={control} />
      <div className="flex flex-row">

      </div>

      <div>
        <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Items adicionais
        </h2>
        {fields.map((field, index) => (
          <div className="flex flex-row" key={field.id}>
            <TextInput label="Item" control={control} name={`additionalItems.${index}.name`} />
            <TextInput label="Quantidade" control={control} name={`additionalItems.${index}.quantity`} />
          </div>
        ))}
        <div className="flex flex-row">
          <Button onClick={() => append({ name: "", quantity: "" })}>Adicionar Item</Button>
          <Button>Texto Livre</Button>
        </div>
      </div>

      <div>
        <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Materiais Complementares
        </h2>
        {materialsFields.map((field, index) => (
          <div className="flex flex-row" key={field.id}>
            <TextInput label="Item" control={control} name={`materials.${index}.name`} />
            <TextInput label="Quantidade" control={control} name={`materials.${index}.quantity`} />
          </div>
        ))}
        <div className="flex flex-row">
          <Button onClick={() => appendMaterials({ name: "", quantity: "" })}>Adicionar Material</Button>
          <Button>Texto Livre</Button>
        </div>
        <div>
          <TextInputArea name="observations" label="Observações ou Instruções Adicionais" control={control} />
        </div>
        <div className="flex flex-row justify-between">
          <Button>Imprimir</Button>
          <div>
            <Button>Cancelar</Button>
            <Button>Salvar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}