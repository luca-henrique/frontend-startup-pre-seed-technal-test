"use client"

import { useFormContext } from "react-hook-form";
import { OrderType } from "../order-form/validations";

export const PreviewOrder = () => {

  const { watch } = useFormContext<OrderType>()

  const { title, description, additionalItems, materials, observations } = watch()

  return (
    <div className="w-full p-4 border-l bg-gray-100">
      <div >
        <h2 className="text-xl font-bold">Ordem de Serviço</h2>
        <h3 className="text-lg font-semibold">{title || "Título aqui"}</h3>

        <h4 className="font-bold">Descrição do Serviço</h4>
        <p>{description || "Descrição do serviço será exibida aqui."}</p>

        <h4 className="font-bold text-red-500">Itens Adicionais</h4>
        <ul>
          {additionalItems.map((item) => (
            <li key={item.name}>{item.name} - {item.quantity}</li>
          ))}
        </ul>

        <h4 className="font-bold text-green-600">Materiais Complementares</h4>
        <ul>
          {materials.map((item) => (
            <li key={item.name}>{item.name} - {item.quantity}</li>
          ))}
        </ul>

        <h4 className="font-bold">Observações</h4>
        <p>{observations || "Nenhuma observação adicionada."}</p>
      </div>


    </div>
  );
}
