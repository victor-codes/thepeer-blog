import Head from "next/head";
import React, { createContext } from "react";
import Shape from "../components/shape";
import { shapesList } from "../utils";

import { ShapeContextType, ColorType, ShapeType } from "../types";

export const ShapeContext = createContext<ShapeContextType>({
  shapeArr: [],
  colorArr: [],
});

function Shapes() {
  let colorArr: ColorType[] = [];
  let shapeArr: ShapeType[] = [];

  const parsedColor: string[] = [];
  const parsedShape: string[] = [];

  for (let i = 0; i < shapesList.length; i++) {
    const color = shapesList[i].color;
    const shape = shapesList[i].shape;

    if (!parsedColor.includes(color)) {
      parsedColor.push(color);
      colorArr.push({ color, isActive: true });
    }
    if (!parsedShape.includes(shape)) {
      parsedShape.push(shape);
      shapeArr.push({ shape, isActive: true });
    }
  }

  return (
    <ShapeContext.Provider value={{ shapeArr, colorArr }}>
      <Head>
        <title>Add Filters</title>
      </Head>
      <div className="shapes">
        <Shape />
      </div>
    </ShapeContext.Provider>
  );
}

export default Shapes;
