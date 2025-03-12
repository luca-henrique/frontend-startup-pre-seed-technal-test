
'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { orderSchema } from "./validations";
import { useEffect } from "react";
import { useOrderStore } from "@/store/order";


export const useOrderForm = () => {

  const { setOrderData } = useOrderStore()

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      title: "",
      description: "",
      additionalItems: [{ name: "", quantity: "0" }],
      materials: [{ name: "", quantity: "0" }],
      observations: "",
    },
  });


  const fieldsForm = watch()

  const { fields, append, prepend, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "additionalItems", // unique name for your Field Array
  });

  const { fields: materialsFields, append: appendMaterials } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "materials", // unique name for your Field Array
  });

  useEffect(() => { setOrderData(fieldsForm) }, [fieldsForm.additionalItems])

  return { handleSubmit, watch, control, errors, fields, append, prepend, move, insert, materialsFields, appendMaterials }
}