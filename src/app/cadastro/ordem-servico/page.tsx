
import { BreadCrumb } from "@/shared/components/molecules/breadcrumb/breadcrumb";

import { OrderForm } from "@/shared/components/organisms/order-form/order-form";
import { PreviewOrder } from "@/shared/components/organisms/preview-order/preview-order";


export default function OrderService() {
  return <div>
    <BreadCrumb />
    <div className="flex flex-col">
      <div className="flex flex-row gap-7">
        <OrderForm />
        <PreviewOrder />
      </div>
    </div>
  </div>
}