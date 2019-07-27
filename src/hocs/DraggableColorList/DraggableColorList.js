import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "../../components/DraggableColorBox/DraggableColorBox";

const DraggableColorList = SortableContainer(
  ({ colors, handleDeleteColor }) => {
    return (
      <div style={{ height: "100%" }}>
        {colors.map((color, index) => (
          <DraggableColorBox
            index={index}
            key={color.name}
            color={color.color}
            name={color.name}
            deleteColor={handleDeleteColor}
          />
        ))}
      </div>
    );
  }
);

export default DraggableColorList;
