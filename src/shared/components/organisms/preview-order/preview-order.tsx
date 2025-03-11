"use client"

import { useOrderStore } from "@/app/orderStore";

export const PreviewOrder = () => {
  const { title, description, additionalItems, materials, observations } = useOrderStore();

  console.log(additionalItems)

  return (
    <div className="w-full p-4 border-l bg-gray-100">
      <div >
        <h2 className="text-xl font-bold">Ordem de Serviço</h2>
        <h3 className="text-lg font-semibold">{title || "Título aqui"}</h3>

        <h4 className="font-bold">Descrição do Serviço</h4>
        <p>{description || "Descrição do serviço será exibida aqui."}</p>

        <h4 className="font-bold text-red-500">Itens Adicionais</h4>
        <ul>
          {additionalItems.map((item, index) => (
            <li key={index}>{item.name} - {item.quantity}</li>
          ))}
        </ul>

        <h4 className="font-bold text-green-600">Materiais Complementares</h4>
        <ul>
          {materials.map((item, index) => (
            <li key={index}>{item.name} - {item.quantity}</li>
          ))}
        </ul>

        <h4 className="font-bold">Observações</h4>
        <p>{observations || "Nenhuma observação adicionada."}</p>
      </div>


    </div>
  );
}
