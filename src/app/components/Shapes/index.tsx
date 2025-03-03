"use client";
import React from "react";

type ShapeProps = {
  type: "circle" | "square" | "triangle";
  color: string;
  size: number;
  opacity: number;
  className?: string;
};

const Shape = ({
  type,
  color,
  size,
  opacity = 1,
  className = "",
}: ShapeProps) => {
  const shapeStyles: { [key: string]: React.CSSProperties } = {
    circle: {
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: "50%",
      opacity,
    },
    square: {
      width: size,
      height: size,
      backgroundColor: color,
      opacity,
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
      opacity,
    },
  };

  return (
    <div
      style={shapeStyles[type]}
      className={`transition-all duration-300 ${className}`}
    />
  );
};

export default Shape;
