"use client";

import { ItemProps } from "../../atoms/item/item";
import { ItemForm } from "../../atoms/item-form/item-form";

interface ListItemProps {
  items: ItemProps[];
}

export const ListItemForm = ({ items }: ListItemProps) => {
  return (
    <>
      {items.map((item) => {
        return <ItemForm key={`${item.name}-${item.quantity}`} {...item} />;
      })}
    </>
  );
};
