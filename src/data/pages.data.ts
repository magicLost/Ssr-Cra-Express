export interface IPageMeta {
  title: string;
  keywords: string;
  description: string;
}

export type RoutesNames = "homepage" | "tour" | "test";
export type RoutesPaths = "/" | "/tour" | "/test";
export type Route = { name: RoutesNames; path: RoutesPaths };

export const routes: Route[] = [
  { name: "homepage", path: "/" },
  { name: "tour", path: "/tour" },
  { name: "test", path: "/test" },
];

export const pageTemplateMarks = {
  title: "!!!title!!!",
  metaKeywords: "!!!meta-keywords!!!",
  metaDescription: "!!!meta-description-content!!!",
  materialUiStyle: "!!!material-ui-css!!!",
  authUser: "!!!auth_user!!!",
  csrfToken: "!!!csrf_token!!!",
  jsScriptTags: "!!!js!!!",
  cssLinks: "!!!css!!!",
  rootDivContent: "!!!content!!!",
};

const homepageData: IPageMeta = {
  title: "Our tours...",
  keywords: "tours travel",
  description:
    "Look for our super puper tours. Here you can find all what you want.",
};

const testPageData: IPageMeta = {
  title: "Test page...",
  keywords: "test test",
  description: "Look for our super puper test page.",
};

const tourPageData: IPageMeta = {
  title: "The forest hicker...",
  keywords: "sun forest",
  description: "Try to survive with wild bears.",
};

export const pagesData: Map<RoutesPaths, IPageMeta> = new Map();

pagesData.set(routes[0].path, homepageData);
pagesData.set(routes[1].path, tourPageData);
pagesData.set(routes[2].path, testPageData);
