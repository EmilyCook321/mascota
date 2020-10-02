import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NumberQuestionPage from "./pages/NumberQuestionPage";
import CongratulationsPage from "./pages/CongratulationsPage";

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
              <h1>Mascota</h1>
              <Link to="/questions/1">Questions 1</Link>
              <Link to="/questions/2">Questions 2</Link>
              <Link to="/questions/3">Questions 3</Link>
              <Link to="/questions/4">Questions 4</Link>
            </div>
          </Route>

          <Route path="/congratulations/">
            <CongratulationsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
