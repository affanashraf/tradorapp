import React, { useState } from "react";

function useServiceButton() {
  const [items, setItems] = useState({
    item_1: "top",
    item_2: "right",
    item_3: "left",
  });
  const goLeft = () => {
    switch (items.item_1) {
      case "top":
        setItems({
          item_1: "left",
          item_2: "top",
          item_3: "right",
        });
        break;
      case "right":
        setItems({
          item_1: "top",
          item_2: "right",
          item_3: "left",
        });
        break;
      case "left":
        setItems({
          item_1: "right",
          item_2: "left",
          item_3: "top",
        });
        break;
    }
  };
  const goRight = () => {
    switch (items.item_1) {
      case "top":
        setItems({
          item_1: "right",
          item_2: "left",
          item_3: "top",
        });
        break;
      case "right":
        setItems({
          item_1: "left",
          item_2: "top",
          item_3: "right",
        });
        break;
      case "left":
        setItems({
          item_1: "top",
          item_2: "right",
          item_3: "left",
        });
        break;
    }
  };
  return [items, goLeft, goRight];
}

export default useServiceButton;
