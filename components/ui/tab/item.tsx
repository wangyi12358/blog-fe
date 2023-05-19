import type {FC} from 'react';
import React, {memo} from 'react';

export interface ItemProps {
}

const Item: FC<ItemProps> = memo(() => {
  return (
    <div>Item</div>
  );
})

export default Item;
