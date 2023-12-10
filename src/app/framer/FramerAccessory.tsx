import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import NextImage from "next/image";
import { ItemTypes } from '../types/FramerItemType';


export interface FramerAccessoryProps {
  item: ItemTypes,
  endDropCallBack: (item: ItemTypes) => void,
}

interface DropResult {
    item: ItemTypes
}

const FramerAccessory: FC<FramerAccessoryProps> = function Box({ item, endDropCallBack }) {
  const [dragResult, drag] = useDrag(() => ({
    type: 'box',
    item: item,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        const item = monitor.getItem();
        endDropCallBack(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <NextImage ref={drag} key={item.key} width={200} height={200} src={item.url} alt="" />
  )
}

export default FramerAccessory;
