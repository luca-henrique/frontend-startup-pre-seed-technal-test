import { v4 as uuid4 } from 'uuid';

export interface ItemProps {
  name: string;
  quantity: string;
}

export const Item = ({ name, quantity }: ItemProps) => {
  return (
    <li className='flex flex-row font-semibold text-sm text-[#414552]'>
      {name}
      {Array.from({ length: 40 }).map(() => (
        <div key={uuid4()}>.</div>
      ))}
      {quantity}
    </li>
  )
}