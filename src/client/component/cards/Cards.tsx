import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import classes from "./Cards.module.scss";
import Card from "../card/Card";

export type Info = {
  title: string;
  text: string;
};

interface CardsProps {
  items: Info[];
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "80%",
      margin: "auto",
    },
  })
);

const Cards = ({ items }: CardsProps) => {
  const styles = useStyles();

  let cards: null | JSX.Element | JSX.Element[] = null;

  if (items.length === 0) {
    cards = (
      <div className={classes.hidden}>
        <Card title="" text="" />
      </div>
    );
  }

  console.log("[RENDER] Cards ");

  return (
    <div className={styles.root}>
      <div className={classes.hidden}>
        <Card title="" text="" />
      </div>
    </div>
  );
};
export default Cards;
