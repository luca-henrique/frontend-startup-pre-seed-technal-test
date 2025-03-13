import { useFormContext } from "react-hook-form";
import { OrderType } from "../../organisms/order-form/validations";
import { ListItems } from "../list-items/list-items";


export const ContentPreviewOrder = () => {
  const { watch } = useFormContext<OrderType>();

  const { description, additionalItems, materials, observations } = watch();

  return (
    <div className="flex flex-col">
      <h4 className="font-bold text-lg mb-2.5">Descrição do Serviço</h4>
      <p className="mb-9">
        {description || "Descrição do serviço será exibida aqui."}
      </p>

      <h4 className="font-semibold text-red-500 mb-[18px]">Itens Adicionais</h4>
      <ListItems items={additionalItems} />

      <h4 className="font-bold text-green-600 mb-[18px]">
        Materiais Complementares
      </h4>
      <ListItems items={materials} />

      <h4 className="font-bold mt-11">Observações</h4>
      <p className="whitespace-pre-wrap">
        {observations ?? "Nenhuma observação adicionada."}
      </p>
    </div>
  );
};
