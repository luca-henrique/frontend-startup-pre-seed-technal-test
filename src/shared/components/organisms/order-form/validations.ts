import { z } from "zod";

export const orderSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres"),
  additionalItems: z.array(
    z.object({
      name: z.string().min(1, "Nome do item obrigatório"),
      quantity: z.string().min(1, "Quantidade obrigatória"),
    })
  ),
  materials: z.array(
    z.object({
      name: z.string().min(1, "Nome do material obrigatório"),
      quantity: z.string().min(1, "Quantidade obrigatória"),
    })
  ),
  observations: z.string().optional(),
});
