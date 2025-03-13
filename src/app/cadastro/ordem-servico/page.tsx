'use client'

import { BreadCrumb } from "@/shared/components/molecules/breadcrumb/breadcrumb";

import { OrderForm } from "@/shared/components/organisms/order-form/order-form";
import { orderSchema, OrderType } from "@/shared/components/organisms/order-form/validations";
import { PreviewOrder } from "@/shared/components/organisms/preview-order/preview-order";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";


import { FormProvider, useForm } from "react-hook-form";
import { useReactToPrint } from "react-to-print";

export default function OrderService() {
  const methods = useForm<OrderType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      title: "",
      description: "",
      additionalItems: [],
      materials: [],
      observations: "",
    },
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef
  });


  return <div>
    <BreadCrumb />
    <div className="flex flex-col mt-9">
      <FormProvider {...methods}>
        <div className="flex flex-row gap-7">
          <OrderForm handlePrint={handlePrint} />
          <PreviewOrder contentRef={contentRef} />
        </div>
      </FormProvider>
    </div>
  </div>
}