import { ItemProps } from "../item/item";

import Image from "next/image";


export const ItemForm = ({ name, quantity }: ItemProps) => {
  return (
    <div className="flex flex-row items-center mt-3.5 w-full">
      <Image src={'/icons/item.svg'} className="h-4 w-2" width={8} height={16} alt="" />
      <label className="ml-1.5 w-full description">{name}</label>
      <label className="w-16 inline-block whitespace-nowrap overflow-hidden">{quantity}</label>
    </div>
  )
}