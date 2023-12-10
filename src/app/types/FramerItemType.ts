import Konva from "konva";

export type ItemTypes = {
    id: string;
    x: number;
    y: number;
    rotation: number;
    isDragging: boolean;
    scaleX: number;
    url: string;
  } & Konva.NodeConfig;