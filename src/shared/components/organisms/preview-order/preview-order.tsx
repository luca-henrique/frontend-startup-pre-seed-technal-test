"use client"

import { useFormContext } from "react-hook-form";
import { OrderType } from "../order-form/validations";

import Image from "next/image";
import { RefObject } from "react";



interface PrewvierOrder {
  contentRef: RefObject<HTMLDivElement | null>
}

export const PreviewOrder = ({ contentRef }: PrewvierOrder) => {

  const { watch } = useFormContext<OrderType>()

  const { title, description, additionalItems, materials, observations } = watch()

  return (
    <div className="w-full p-4 border-l bg-[#EBEBEB] px-8 py-14 rounded-t-xl">
      <div className="bg-[#fff] px-14 py-8 h-[944px]" ref={contentRef} >
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-xl mb-2.5 font-bold mt-11 text-[#848484]">Ordem de Serviço</h2>
            <h3 className="text-[26px] mb-9 font-semibold text-[#414552]">{title || "Título aqui"}</h3>
          </div>
          <Image src="https://github.com/shadcn.png" className="rounded-full" height={64} width={64} alt="user" />
        </div>

        <h4 className="font-bold text-lg mb-2.5">Descrição do Serviço</h4>
        <p className="mb-9">{description || "Descrição do serviço será exibida aqui."}</p>

        <h4 className="font-semibold text-red-500 mb-[18px]">Itens Adicionais</h4>
        <ul className="mb-9">
          {additionalItems.map((item) => (
            <li key={item.name}>{item.name} {Array.from({ length: 40 }).map(() => <>.</>)} {item.quantity}</li>
          ))}
        </ul>

        <h4 className="font-bold text-green-600 mb-[18px]">Materiais Complementares</h4>
        <ul>
          {materials.map((item) => {
            return (
              <li key={item.name}>{item.name} {Array.from({ length: 40 }).map(() => <>.</>)} {item.quantity}</li>
            )
          })}
        </ul>

        <h4 className="font-bold mt-11">Observações</h4>
        <p className="whitespace-pre-wrap">{observations || "Nenhuma observação adicionada."}</p>

        <div className="flex flex-row justify-between items-end mt-[230px]">
          <Image src="/icons/gear.svg" width={84} height={84} alt="gear" />
          <div className="flex flex-col items-center">
            <Image src="/image/assinatura.png" width={173.4} height={80} alt="assinatura" className="border-b-2" />
            <h6 className="mt-2">Marcelo Timóteo</h6>
            <h6>Mecânico Responsável</h6>
          </div>
        </div>
      </div>




    </div>
  );
}
