import React from "react";
// @ts-ignore
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import path from "path";
import fs from "fs";
import { promisify } from "util";
import App from "../client/App";
import {
  pageTemplateMarks,
  pagesData,
  Route,
  routes,
} from "../data/pages.data";

export interface IPageData {
  meta: any;
  pagePropsOrState: any;
}

const statsFile = path.resolve(
  path.resolve(__dirname, "..", "..", "..", "build", "loadable-stats.json")
);

const renderPage = (route: Route) => {
  const extractor = new ChunkExtractor({ statsFile });
  const sheets = new ServerStyleSheets();

  const html = renderToString(
    sheets.collect(
      <ChunkExtractorManager extractor={extractor}>
        <StaticRouter location={route.path} context={{}}>
          <App />
        </StaticRouter>
      </ChunkExtractorManager>
    )
  );

  const materialUiCss = sheets.toString();

  //get js without main js
  const js = extractor.getScriptTags();

  //get css without main css
  const cssLinks = extractor.getStyleTags();

  return { html, materialUiCss, js, cssLinks };
};

const fillTemplateWithData = async (
  route: Route,
  html: string,
  materialUiCss: string,
  js: string,
  cssLinks: string
) => {
  let finalTemplate = "";

  //get template html
  const template = await promisify(fs.readFile)(
    path.join(__dirname, "..", "staticSsr", "index.template.html"),
    { encoding: "utf-8" }
  );

  //get page data
  if (!pagesData.has(route.path))
    throw new Error(`No data for route ${route.path}`);
  const pageData = pagesData.get(route.path);

  //inject meta data to template
  for (let data in pageData) {
    switch (data) {
      case "title":
        finalTemplate = template.replace(
          pageTemplateMarks.title,
          pageData[data]
        );
        break;
      case "keywords":
        finalTemplate = finalTemplate.replace(
          pageTemplateMarks.metaKeywords,
          pageData[data]
        );
        break;
      case "description":
        finalTemplate = finalTemplate.replace(
          pageTemplateMarks.metaDescription,
          pageData[data]
        );
        break;
      default:
        throw new Error(`Unknown type ${data}`);
    }
  }

  //inject script tags
  finalTemplate = finalTemplate.replace(pageTemplateMarks.jsScriptTags, js);
  //inject scc links
  finalTemplate = finalTemplate.replace(pageTemplateMarks.cssLinks, cssLinks);
  //inject material ui style tag
  finalTemplate = finalTemplate.replace(
    pageTemplateMarks.materialUiStyle,
    `
    <style id="jss-server-side" rel="stylesheet">${materialUiCss}</style>
  `
  );
  //inject root div content
  finalTemplate = finalTemplate.replace(pageTemplateMarks.rootDivContent, html);

  return finalTemplate;
};

const savePage = async (data: string, pageName: string) => {
  //path.resolve(__dirname, "..", "..", "..", "build", "loadable-stats.json")
  await promisify(fs.writeFile)(
    path.resolve(__dirname, "..", "..", "..", "build", `${pageName}.html`),
    data,
    { encoding: "utf-8" }
  );
};

const render = async (route: Route) => {
  const { html, materialUiCss, js, cssLinks } = renderPage(route);
  const template = await fillTemplateWithData(
    route,
    html,
    materialUiCss,
    js,
    cssLinks
  );
  await savePage(template, route.name);
};

const make = async (routes: Route[]) => {
  routes.forEach((route) => {
    render(route);
  });
};

make(routes);
