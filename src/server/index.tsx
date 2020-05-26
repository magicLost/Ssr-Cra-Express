import fs from "fs";
import path from "path";
import { promisify } from "util";
import React from "react";
import { renderToString } from "react-dom/server";
import Test from "../client/component/test/Test";
import { render as homepageRender } from "../ssrRender/dynamicSsr/homepage";
import express from "express";
import dotenv from "dotenv";
//import App from "../client/App";

export interface IPageTemplates {
  homepage: string;
  test: string;
  tour: string;
}

const templatesFilesNames: { [name: string]: string } = {
  homepage: "homepage.html",
  test: "test.html",
  tour: "tour.html",
};

const pathToBuildDir = path.resolve(__dirname, "..", "..", "..", "build");

const getPageTemlates = async (): Promise<IPageTemplates> => {
  const templateReadPromises = [];

  for (let file in templatesFilesNames) {
    templateReadPromises.push(
      promisify(fs.readFile)(`${pathToBuildDir}/${templatesFilesNames[file]}`, {
        encoding: "utf-8",
      })
    );
  }

  const [homepage, test, tour] = await Promise.all(templateReadPromises);

  return {
    homepage: homepage,
    test: test,
    tour: tour,
  };
};

const init = async () => {
  dotenv.config({ path: path.resolve("..", "..", "..", ".env") });

  console.log("NODE_ENV", process.env.NODE_ENV);

  //get page templates
  const pageTemplates: IPageTemplates = await getPageTemlates();

  const app = express();

  app.use(express.static(pathToBuildDir));

  app.get("/", (req, res, next) => {
    const result = homepageRender();
    console.log(`Tours card render - ${result}`);
    res.status(200).send(pageTemplates.homepage);
  });

  app.get("/tour", (req, res, next) => {
    res.status(200).send(pageTemplates.tour);
  });

  app.get("/test", (req, res, next) => {
    res.status(200).send(pageTemplates.test);
  });

  app.listen({ port: 3000 }, () => {
    console.log(`Server listen on http://localhost:3000`);
  });
};

init();
