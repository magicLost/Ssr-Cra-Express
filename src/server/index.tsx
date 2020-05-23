import fs from "fs";
import path from "path";
import { promisify } from "util";
import React from "react";
import { renderToString } from "react-dom/server";
import Test from "../client/component/test/Test";
//import App from "../client/App";

//node -r source-map-support/register ./src/server/build/server.bundle.js
const compileAndSaveApp = async () => {
  const html = renderToString(<Test items={[1, 2, 3, 4, 5, 6, 7]} />);

  await promisify(fs.writeFile)(
    path.resolve(__dirname, "..", "test.html"),
    html,
    { encoding: "utf-8" }
  );
  //throw new Error("Bad fat error");
  console.log("Add good");
};

compileAndSaveApp();

//const str: string = "start";

//console.log(str);
