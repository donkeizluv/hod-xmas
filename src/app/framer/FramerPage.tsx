"use client";

import React, { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Stage, Layer, Star, Image, Transformer } from "react-konva";
import useImage from "use-image";

import "./framer-page.styles.css";

function generateShapes() {
  return [...Array(2)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
    scaleX: 1,
    data: "hat",
  }));
}

const INITIAL_STATE = generateShapes();

const AvatarImage = (props) => {
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return <Image width={400} height={400} image={image} {...props} />;
};

const HatImage = (props) => {
  const [image] = useImage("christmas_hat.png");
  return <Image width={100} height={100} image={image} {...props} />;
};

const App = () => {
  const [stars, setStars] = useState(INITIAL_STATE);
  const [accessories, setAccessories] = useState([]);
  const [selectedImage, setSelectedImage] = useState({
    node: null,
    data: null,
  });
  const stageRef = useRef(null);

  const handleImageClick = (event, item) => {
    setSelectedImage({
      node: event.target,
      data: item,
    });
  };

  const handleClickOutside = (e) => {
    // Check if the clicked element is outside the Transformer and stage
    console.log(
      "asdasdasdasdasd",
      stageRef.current && stageRef.current.container().contains(e.target)
    );
    if (stageRef.current && !stageRef.current.container().contains(e.target)) {
      setSelectedImage({
        node: null,
        data: null,
      }); // Deselect the image
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Delete" || e.key === "Delete") {
      if (selectedImage?.data?.id) {
        setStars(stars.filter((image) => image.id !== selectedImage.data.id));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleRotate = () => {
    if (selectedImage) {
      const updatedImages = stars.map((image) => {
        if (image.id === selectedImage.data.id) {
          return { ...image, scaleX: -image.scaleX };
        }
        return image;
      });
      setStars(updatedImages);
    }
  };

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const addAccessory = (accessoryType, x, y) => {
    setAccessories([...accessories, { type: accessoryType, x, y }]);
  };

  const handleDrop = (item, monitor) => {
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    addAccessory(item.type, left, top);
  };

  const DraggableAccessory = ({ type }) => {
    const handleDragStart = (e) => {
      e.dataTransfer.setData("type", type);
    };

    return (
      <img
        draggable
        onDragStart={handleDragStart}
        src={`./christmas_${type}.png`}
        alt={type}
        style={{ width: "50px", height: "50px", cursor: "move" }}
      />
    );
  };

  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <AvatarImage x={window.innerWidth / 3} y={window.innerHeight / 3} />
          {console.log(stars)}
          {stars.map((star) => (
            <HatImage
              onClick={(event) => handleImageClick(event, star)}
              key={star.id}
              id={star.id}
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
          {selectedImage.node != null && (
            <Transformer
              ref={(node) => {
                // eslint-disable-next-line no-unused-expressions
                node && node.getLayer().batchDraw();
              }}
              enabledAnchors={[
                "top-left",
                "top-right",
                "bottom-left",
                "bottom-right",
              ]}
              boundBoxFunc={(oldBox, newBox) => {
                if (newBox.width < 50 || newBox.height < 50) {
                  return oldBox;
                }
                return newBox;
              }}
              rotateAnchorOffset={20}
              rotateEnabled={true}
              keepRatio={true}
              flipEnabled={true}
              useSingleNodeRotation={false}
              node={selectedImage.node}
            />
          )}
        </Layer>
      </Stage>
      <button className="rotate" onClick={handleRotate}>
        Rotate
      </button>
      <div>
        <DraggableAccessory type="hat" />
        <DraggableAccessory type="hat" />
        {/* Add more accessories as needed */}
      </div>
    </DndProvider>
  );
};

export default App;
