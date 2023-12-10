"use client";

import React, {
  useState,
  useEffect,
  createRef,
  RefObject,
  useRef,
} from "react";
import Konva from "konva";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Stage, Layer, Star, Image, Transformer } from "react-konva";
import useImage from "use-image";
import FramerItem from "./FramerItem";
import { HStack, Center, Box, VStack } from "@chakra-ui/react";
import { ItemTypes } from "../types/FramerItemType";
import "./framer-page.styles.css";
import NextImage from "next/image";
import FramerAccessory from "./FramerAccessory";
import { NodeConfig } from "konva/lib/Node";

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

function generateAccessories() {
  return [...Array(13)].map((_, i) => ({
    key: `image` + i.toString(),
    url: `/assets/accessories/g_${i + 1}.png`,
  }));
}

const INITIAL_STATE = generateShapes();

const AvatarImage = (props: any) => {
  const [image] = useImage("/assets/avatar.jpg");
  return <Image image={image} {...props} />;
};

const App = () => {
  const [items, setItems] = useState<ItemTypes[]>([]);
  const stageRef: RefObject<Konva.Stage> = createRef();
  const [selectedId, selectItem] = useState<String | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dropResult, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const checkDeselect = (
    event:
      | Konva.KonvaEventObject<MouseEvent>
      | Konva.KonvaEventObject<TouchEvent>
  ) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = event.target === event.target.getStage();
    console.log("clickedOnEmpty", clickedOnEmpty);
    if (clickedOnEmpty) {
      selectItem(undefined);
    }
  };

  const onItemSelect = (id: string) => {
    selectItem(id);
  };

  const handleItemChange = (id: string | undefined, newProps: ItemTypes) => {
    if (items && items.length > 0) {
      const newItems = [...items].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...newProps,
          };
        }
        return item;
      });
      console.log(newItems);
      setItems(newItems);
    }
  };

  const handleAddItemByUrl = (url: string) => {
    setItems((pre) => {
      const newItems = [...pre];
      newItems.push({
        id: newItems.length.toString(),
        x: containerRef.current?.scrollTop,
        y: containerRef.current?.scrollLeft,
        isDragging: false,
        scaleX: 1,
        url: url,
      });
      return newItems;
    });
  };

  const avatarPosition = {
    x: 0,
    y: 0,
  };
  console.log(
    containerRef.current?.offsetWidth,
    containerRef.current?.offsetHeight
  );
  return (
    <HStack w="100%">
      {/* Editor screen */}
      <Box w="50%" h="50vh" ref={containerRef}>
        <Box ref={drop}>
          <Stage
            ref={stageRef}
            width={containerRef.current?.offsetWidth || window.innerWidth}
            height={containerRef.current?.offsetHeight || window.innerHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >
            <Layer>
              {/* AvatarImage center of stageRef position */}
              <AvatarImage
                x={avatarPosition.x}
                y={avatarPosition.y}
                width={containerRef.current?.offsetWidth}
                height={containerRef.current?.offsetHeight}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
              />
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <FramerItem
                    key={item.id}
                    shapeProps={item}
                    isSelected={item.id === selectedId}
                    onSelect={() => {
                      selectItem(item.id);
                    }}
                    onChange={(newProps) => handleItemChange(item.id, newProps)}
                    itemUrl={item.url}
                  />
                ))}
            </Layer>
          </Stage>
        </Box>
      </Box>

      {/* Editor tools */}
      <VStack wrap="wrap" w="50%" h="50vh" bg={"black"} opacity={"0.9"}>
        {generateAccessories().map((item, index) => (
          <FramerAccessory
            key={item.key}
            item={item}
            endDropCallBack={(item) => handleAddItemByUrl(item.url)}
          />
        ))}
      </VStack>
    </HStack>
  );
};

export default App;
