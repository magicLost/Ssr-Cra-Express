import React from "react";
import classes from "./Card.module.scss";

interface CardProps {
  title: string;
  text: string;
}

const Card = ({ title, text }: CardProps) => {
  console.log("[RENDER] Card ");

  return (
    <div className={classes.card}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};
export default Card;
