import React from "react";
import Mheader from "components/Mheader";
import { HashRouter, Switch, Route } from "react-router-dom";
import Routers from "./router/routerMaps";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Mheader />
        <Switch>
          {Routers.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact
              component={item.component}
            />
          ))}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
