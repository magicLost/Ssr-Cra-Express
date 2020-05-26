import Cards, { Info } from "../../client/component/cards/Cards";
import React from "react";
import { renderToString } from "react-dom/server";

//get tours
const tours: Info[] = [
  { title: "First", text: "Super duper first tour." },
  { title: "Second", text: "Super duper first tour." },
  /*  { title: "Third", text: "Super duper first tour." },
  { title: "Fourth", text: "Super duper first tour." },
  { title: "Fifth", text: "Super duper first tour." }, */
];

//render cards
export const render = () => {
  console.log("HOMEPAGE RENDER ", process.env.NODE_ENV);
  //render to string
  const result = renderToString(<Cards items={tours} />);

  //inject into template
  return result;
};
