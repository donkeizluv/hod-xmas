"use client";

import React, { useState, useEffect, createRef, RefObject } from "react";
import Konva from "konva";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Stage, Layer, Star, Image, Transformer } from "react-konva";
import useImage from "use-image";
import FramerItem from "./FramerItem";

import "./framer-page.styles.css";
import { ItemTypes } from "../types/FramerItemType";



function generateShapes() {
  return [...Array(2)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
    scaleX: 1,
    url: "https://konvajs.org/assets/lion.png",
  }));
}

const INITIAL_STATE = generateShapes();

const AvatarImage = (props: any) => {
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return <Image width={400} height={400} image={image} {...props} />;
};

const App = () => {
  const [items, setItems] = useState(INITIAL_STATE);
  const stageRef: RefObject<Konva.Stage> = createRef();
  const [selectedId, selectItem] = useState<String | null>(null);

  const checkDeselect = (event: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      selectItem(null);
    }
  };

  const onItemSelect = (id: string) => {  
    selectItem(id);
  }

  const handleItemChange = (id: string, newProps: ItemTypes) => {
    const newItems = [...items].map((item) => { 
      if(item.id === id) {
        return {
          ...item,
          ...newProps,
          };
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <AvatarImage x={window.innerWidth / 3} y={window.innerHeight / 3} />
          {items.map((item, index) => (
          <FramerItem key={item.id}
            shapeProps={item}
            isSelected={item.id === selectedId}
            onSelect={() => {
              selectItem(item.id);
            }}
            onChange={(newProps) => handleItemChange(item.id, newProps)} 
            itemUrl={item.url} />
          ))}
        </Layer>
      </Stage>
    </DndProvider>
  );
};

export default App;
