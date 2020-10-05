import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NumberQuestionPage from "./pages/NumberQuestionPage";
import CongratulationsPage from "./pages/CongratulationsPage";
import HomePage from "./pages/HomePage";
import ProgressTracker from "./pages/ProgressTracker";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/questions/:id">
            <NumberQuestionPage />
          </Route>

          <Route exact path="/">
            <div>
              <HomePage />
              <h1>Mascota</h1>
            </div>
          </Route>

          <Route path="/congratulations">
            <CongratulationsPage />
          </Route>
          <Route path="/progresstracker">
            <ProgressTracker />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
