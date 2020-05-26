import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
//import Test from "./component/test/Test";
//import Homepage from "./container/pages/Homepage/Homepage";
//m,import TourPage from "./container/pages/TourPage/TourPage";
// @ts-ignore
import loadable from "@loadable/component";

function App() {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const HomepageLoadable = loadable(() =>
    import("./container/pages/Homepage/Homepage")
  );
  const TouPageLoadable = loadable(() =>
    import("./container/pages/TourPage/TourPage")
  );
  const TestLoadable = loadable(() => import("./component/test/Test"));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Switch>
          <Route path="/tour" component={TouPageLoadable} />
          <Route path="/test" component={TestLoadable} />
          <Route path="/">
            <HomepageLoadable />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
