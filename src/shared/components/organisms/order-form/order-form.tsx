"use client"

import { Button } from "@/components/ui/button"
import { TextInputArea } from "../../atoms/input-text-area/input-text-area"
import { TextInput } from "../../atoms/input/input"

import { CheckBox } from "../../atoms/checkbox/checkbox"
import { useFieldArray, useFormContext } from "react-hook-form"

import Image from "next/image"
import { OrderType } from "./validations"


export const OrderForm = () => {
  const { control, watch } = useFormContext<OrderType>()

  const { fields, append } = useFieldArray({
    control,
    name: "additionalItems",
  });

  const { fields: materialsFields, append: appendMaterials } = useFieldArray({
    control,
    name: "materials",
  });

  const { materials, additionalItems } = watch()

  const changeLastFieldAdditionalItems = fields.length > 0 ? fields.length - 1 : 0;
  const changeLastFieldMaterials = materialsFields.length > 0 ? materialsFields.length - 1 : 0;

  return (
    <div className="flex flex-col max-w-[371px]  mb-[87px]">
      <h1 className="mt-10 scroll-m-20 text-[28px] mb-2 tracking-tight transition-colors first:mt-0 text-[#414552] font-semibold">
        Nova Ordem de Serviço
      </h1>
      <TextInput control={control} label="Nome da Ordem de Serviço" name="title" className="mb-6" />
      <TextInputArea label="Descrição do Serviço" name="description" control={control} className="mb-6" />

      <div className="flex flex-col mb-11">
        <h2 className="mt-10 scroll-m-20 text-base mb-2 tracking-tight transition-colors first:mt-0 text-[#FF0000] font-semibold">
          Items adicionais
        </h2>

        <div key={changeLastFieldAdditionalItems} className="flex flex-row gap-4">
          <TextInput label="Item" control={control} className="w-[280px]" name={`additionalItems.${changeLastFieldAdditionalItems}.name`} />
          <TextInput label="Quantidade" control={control} name={`additionalItems.${changeLastFieldAdditionalItems}.quantity`} className="w-[73px]" />
        </div>

        {additionalItems.map((item) => {
          return (
            <div key={`${item.name}-${item.quantity}`} className="flex flex-row items-center mt-3.5">
              <Image src={'/icons/item.svg'} className="h-4 w-2" width={8} height={16} alt="" />
              <label className="ml-1.5">{item.name}</label>
              <span className="w-full border-dotted border-b-4 border-[#000] h-fit"> </span>
              <label>{item.quantity}</label>
            </div>
          )
        })}
        <div className="flex flex-row mt-3.5 gap-2 ">
          <Button className="w-[222px] bg-[#FF0004] hover:bg-[#FF0004]" onClick={() => append({ name: "", quantity: "" })} >Adicionar Item</Button>
          <Button className="bg-[#FF0004] hover:bg-[#FF0004] w-[140px]">Texto Livre</Button>
        </div>
      </div>

      <div className="flex flex-col mb-11">
        <h2 className="mt-10 scroll-m-20 text-base mb-2 tracking-tight transition-colors first:mt-0 text-[#15BE53]  font-semibold">
          Materiais Complementares
        </h2>
        <div className="flex flex-row gap-4" key={changeLastFieldMaterials}>
          <TextInput label="Item" className="w-[280px]" control={control} name={`materials.${changeLastFieldMaterials}.name`} />
          <TextInput label="Quantidade" control={control} name={`materials.${changeLastFieldMaterials}.quantity`} className="w-[73px]" />
        </div>

        {materials.map((item) => {
          return (
            <div key={`${item.name}-${item.quantity}`} className="flex flex-row items-center mt-3.5">
              <Image src={'/icons/item.svg'} className="h-4 w-2" width={8} height={16} alt="" />
              <label className="ml-1.5">{item.name}</label>
              <span className="w-full border-dotted border-b-4 border-[#000] h-fit"> </span>
              <label>{item.quantity}</label>
            </div>
          )
        })}
        <div className="flex flex-row mt-3.5 gap-2">
          <Button className="w-[222px] bg-[#15BE53] hover:bg-[#15BE53]" onClick={() => appendMaterials({ name: "", quantity: "" })}>Adicionar Material</Button>
          <Button className="w-[140px] bg-[#15BE53] hover:bg-[#15BE53]">Texto Livre</Button>
        </div>
      </div>

      <div>
        <TextInputArea name="observations" label="Observações ou Instruções Adicionais" control={control} />
      </div>

      <div className="flex flex-row justify-between mt-8 mb-4">
        <Button className="bg-[#fff] text-[#414552]  hover:bg-[#f3f3f3] border-[##e6e6e6] border">Imprimir</Button>
        <div className="flex flex-row gap-2">
          <Button className="bg-[#fff] text-[#414552] hover:bg-[#f3f3f3] border-[##e6e6e6] border">Cancelar</Button>
          <Button className="bg-[#FF0004]">Salvar</Button>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <CheckBox />
      </div>
    </div>
  )
}