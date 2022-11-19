import { useContext, useEffect, useReducer, useState } from "react";
import { ShapeContext } from "../pages/filter";
import { ShapeContextType, ColorType, ShapeType } from "../types";

function Shape() {
  const { shapeArr, colorArr } = useContext<ShapeContextType>(ShapeContext);
  const [title, setTitle] = useState<string>("All items");

  function shapeReducer(state: any, action: any) {
    switch (action.type) {
      case "Shape":
        return state.map((item: any) => {
          if (state.length - 1 === action.index && item.isActive) {
            return { ...item, isActive: false };
          }
          if (item.shape === action.shape) {
            return { ...item, isActive: !item.isActive };
          } else {
            return item;
          }
        });

      default:
        break;
    }
  }

  const [shapeState, shapeDispatch] = useReducer(shapeReducer, shapeArr);

  function colorReducer(state: any, action: any) {
    switch (action.type) {
      case "Color":
        return state.map((item: any) => {
          if (state.length - 1 === action.index && item.isActive) {
            return { ...item, isActive: false };
          }
          if (item.color === action.color) {
            return { ...item, isActive: !item.isActive };
          } else {
            return item;
          }
        });

      default:
        break;
    }
  }

  const [colorState, colorDispatch] = useReducer(colorReducer, colorArr);

  useEffect(() => {
    let colorSelect = colorState.filter(
      (color: ColorType) => color.isActive === true
    );
    let colorLen = colorSelect.length;

    let shapeSelect = shapeState.filter(
      (shape: ShapeType) => shape.isActive === true
    );
    let shapeLen = shapeSelect.length;

    let colorStateLen = colorState.length;
    let shapeStateLen = shapeState.length;

    let allShape = shapeLen === shapeStateLen;
    let allColor = colorLen === colorStateLen;


    // all color selected
    if (allColor) {
      setTitle("All color items");
    }

    // all shape selected
    if (allShape) {
      setTitle("All shape items");
    }

    // mutliple color selected
    if (!allColor && colorLen > 1) {
      setTitle("Mutliple color items");
    }

    // mutliple shape selected

    if (!allShape && shapeLen > 1) {
      setTitle("Mutliple shape items");
    }

    // multiple shape and color selected
    if ((allColor && shapeLen > 1) || (allShape && colorLen > 1)) {
      setTitle("Multiple items");
    }

    if (shapeLen > 1 && colorLen === 1) {
      setTitle(`Multiple ${colorSelect[0].color} items`);
    }

    if (colorLen > 1 && shapeLen === 1) {
      setTitle(`Multiple ${shapeSelect[0].shape} items`);
    }

    // all shape and one color selected
    if (allShape && colorLen === 1) {
      setTitle(`All ${colorSelect[0].color} items`);
    }

    // all color and one shape selected
    if (allColor && shapeLen === 1) {
      setTitle(`All ${shapeSelect[0].shape} items`);
    }

    if (colorLen === 1 && shapeLen === 0) {
      setTitle(`${colorSelect[0].color} item`);
    }

    if (shapeLen === 1 && colorLen === 0) {
      setTitle(`${shapeSelect[0].shape} item`);
    }

    // a single color and shape is selected
    if (colorLen === 1 && shapeLen === 1) {
      setTitle(`${colorSelect[0].color} ${shapeSelect[0].shape} items`);
    }

    // all the colours and shapes are selected
    if (allColor && allShape) {
      setTitle("All items");
    }

    if (colorLen === 0 && shapeLen === 0) {
      setTitle("No shape or color selected");
    }
  }, [shapeState, colorState]);

  return (
    <div className="shapes">
      <div className="shapes__title">Filter: {title}</div>
      <div>
        <p>Shapes</p>
        <div className="shapes__item_container">
          {shapeState &&
            shapeState.map(({ shape, isActive }: ShapeType, index: number) => (
              <button
                onClick={() => {
                  shapeDispatch({ type: "Shape", shape, index });
                }}
                className={`shapes__item shapes__item--shape ${
                  isActive ? "shapes__item--active" : ""
                }`}
                key={index}
              >
                {shape}
              </button>
            ))}
        </div>
        <p>Colors</p>
        <div className="shapes__item_container">
          {colorState &&
            colorState.map(({ color, isActive }: ColorType, index: number) => (
              <button
                onClick={() => {
                  colorDispatch({ type: "Color", color, index });
                }}
                style={{
                  backgroundColor: color,
                }}
                className={`shapes__item shapes__item--color ${
                  isActive ? "shapes__item--active" : ""
                }`}
                key={index}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shape;
