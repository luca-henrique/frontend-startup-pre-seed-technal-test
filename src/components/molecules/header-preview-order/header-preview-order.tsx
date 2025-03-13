"use client";

import { useFormContext } from "react-hook-form";
import Image from "next/image";

import { OrderType } from "@/components/organisms/order-form/validations";
import { useUserStore } from "@/store/user";

export const HeaderPreviewOrder = () => {
  const { watch } = useFormContext<OrderType>();

  const { avatar } = useUserStore()

  const { title } = watch();

  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <h2 className="text-xl mb-2.5 font-bold mt-11 text-[#848484]">
          Ordem de Serviço
        </h2>
        <h3 className="text-[26px] mb-9 font-semibold text-[#414552]">
          {title || "Título aqui"}
        </h3>
      </div>
      <Image
        src={avatar}
        className="rounded-full"
        height={64}
        width={64}
        alt="user"
      />
    </div>
  );
};
