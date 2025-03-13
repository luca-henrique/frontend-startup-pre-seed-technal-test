'use client'

import { v4 as uuidv4 } from 'uuid';
import { Item, ItemProps } from '../../atoms/item/item';

interface ListItemProps {
  items: ItemProps[];
}

export const ListItems = ({ items = [] }: ListItemProps) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={uuidv4()} {...item} />
      ))}
    </ul>
  );
}