import React from "react";
import classes from "./Test.module.scss";

const Test = ({ items }: { items: any[] }) => {
  const itemsElements =
    items && items.length > 0
      ? items.map((value, index) => {
          return <h1 key={value + index}>{value}</h1>;
        })
      : null;

  return <div className={classes.test}>{itemsElements}</div>;
};

export default Test;
