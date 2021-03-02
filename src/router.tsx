import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/homerouter";
import NotFoundError from "./pages/notfound";

function router() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route component={NotFoundError}/>
      </Switch>
    </Router>
  );
}

export default router;
