"use client"

import { Button } from "@/components/ui/button"
import { TextInputArea } from "../../atoms/input-text-area/input-text-area"
import { TextInput } from "../../atoms/input/input"

import { useOrderForm } from "./use-order"

export const OrderForm = () => {


  const { control, append, appendMaterials, fields, materialsFields } = useOrderForm();


  return (
    <div className="flex flex-col max-w-[371px]">
      <h1 className="mt-10 scroll-m-20 text-[28px] mb-2 tracking-tight transition-colors first:mt-0 text-[#414552] font-semibold">
        Nova Ordem de Serviço
      </h1>
      <TextInput control={control} label="Nome da Ordem de Serviço" name="title" className="mb-6" />
      <TextInputArea label="Descrição do Serviço" name="description" control={control} className="mb-6" />

      <div className="flex flex-col mb-11">
        <h2 className="mt-10 scroll-m-20 text-base mb-2 tracking-tight transition-colors first:mt-0 text-[#FF0000] font-semibold">
          Items adicionais
        </h2>
        {fields.map((field, index) => (
          <div className="flex flex-row" key={field.id}>
            <TextInput label="Item" control={control} name={`additionalItems.${index}.name`} />
            <TextInput label="Quantidade" control={control} name={`additionalItems.${index}.quantity`} />
          </div>
        ))}
        <div className="flex flex-row mt-3.5 gap-2 ">
          <Button className="w-[222px] bg-[#FF0004] hover:bg-[#FF0004]" onClick={() => append({ name: "", quantity: "" })}>Adicionar Item</Button>
          <Button className="w-fit bg-[#FF0004] hover:bg-[#FF0004]">Texto Livre</Button>
        </div>
      </div>

      <div className="flex flex-col mb-11">
        <h2 className="mt-10 scroll-m-20 text-base mb-2 tracking-tight transition-colors first:mt-0 text-[#15BE53]  font-semibold">
          Materiais Complementares
        </h2>
        {materialsFields.map((field, index) => (
          <div className="flex flex-row" key={field.id}>
            <TextInput label="Item" control={control} name={`materials.${index}.name`} />
            <TextInput label="Quantidade" control={control} name={`materials.${index}.quantity`} />
          </div>
        ))}
        <div className="flex flex-row mt-3.5 gap-2">
          <Button className="w-[222px] bg-[#15BE53] hover:bg-[#15BE53]" onClick={() => appendMaterials({ name: "", quantity: "" })}>Adicionar Material</Button>
          <Button className="w-fit bg-[#15BE53] hover:bg-[#15BE53]">Texto Livre</Button>
        </div>
      </div>

      <div>
        <TextInputArea name="observations" label="Observações ou Instruções Adicionais" control={control} />
      </div>

      <div className="flex flex-row justify-between mt-8">
        <Button className="bg-[#fff] text-[#414552]  hover:bg-[#f3f3f3]">Imprimir</Button>
        <div className="flex flex-row gap-2">
          <Button className="bg-[#fff] text-[#414552] hover:bg-[#f3f3f3]">Cancelar</Button>
          <Button className="bg-[#FF0004]">Salvar</Button>
        </div>
      </div>
    </div>
  )
}