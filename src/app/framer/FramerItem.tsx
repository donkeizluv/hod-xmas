import React, {createRef, RefObject, useCallback} from 'react';
import Konva from "konva";
import { Image, Transformer } from 'react-konva';
import useImage from "use-image";
import { ItemTypes } from '../types/FramerItemType';

type FramerItemProps = {
    shapeProps: ItemTypes;
    isSelected: boolean;
    itemUrl: string;
    onSelect: () => void;
    onChange: (newProps: any) => void;
};

const FramerItem = ({ shapeProps, isSelected, onSelect, onChange, itemUrl }: FramerItemProps) => {
  const itemRef: RefObject<Konva.Image> = createRef();
  const trRef: RefObject<Konva.Transformer> = createRef();
  const [image] = useImage(itemUrl);
  React.useEffect(() => {
    if (isSelected) {
      if(trRef.current && itemRef.current) { 
        const layer = trRef.current.getLayer()
        trRef.current.setNode(itemRef.current);
        if(layer) layer.batchDraw();
      }
    }
  }, [isSelected]);

  const onTransformEnd = useCallback(
    () => {
        // transformer is changing scale of the node
        // and NOT its width or height
        // but in the store we have only width and height
        // to match the data better we will reset scale on transform end
        const node = itemRef.current;
        if(!node) return;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        // we will reset it back
        node.scaleX(1);
        node.scaleY(1);
        onChange({
          ...shapeProps,
          x: node.x(),
          y: node.y(),
          // set minimal value
          width: Math.max(5, node.width() * scaleX),
          height: Math.max(node.height() * scaleY),
        });
  }, [itemRef, onChange, shapeProps])

  return (
    <>
    <Image image={image} 
        alt=""  
        onClick={onSelect}
        onTap={onSelect}
        width={400}
        height={400}
        ref={itemRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={onTransformEnd}/>


      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default FramerItem;