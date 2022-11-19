import Head from "next/head";
import React, { createContext, useEffect, useState } from "react";
import Shape from "../components/shape";
import { shapesList } from "../utils";

export const ShapeContext = createContext<{
  shapeArr?: object;
  colorArr?: object;
}>({});

function Shapes() {
  let colorArr = [];
  let shapeArr: any[] = [];

  const parsedColor: string[] = [];
  const parsedShape: string[] = [];

  for (let i = 0; i < shapesList.length; i++) {
    const color = shapesList[i].color;
    const shape = shapesList[i].shape;

    if (!parsedColor.includes(color)) {
      parsedColor.push(color);
    }
    if (!parsedShape.includes(shape)) {
      parsedShape.push(shape);
    }
  }
  for (let i = 0; i < parsedShape.length; i++) {
    const element = parsedShape[i];
    shapeArr.push({ shape: element, isActive: true });
  }

  for (let i = 0; i < parsedColor.length; i++) {
    const element = parsedColor[i];
    colorArr.push({ color: element, isActive: true });
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
