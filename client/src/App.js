import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NumberQuestionPage from "./pages/NumberQuestionPage";
import styled from "@emotion/styled";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/questions/:id">
            <NumberQuestionPage />
          </Route>
          <Route path="/">
            <div>
              <h1>Mascota</h1>
              <Link to="/howtoplay">How to Play</Link>
              <Link to="/design">Design Your Mascota</Link>
              <Link to="/questions/1">Questions 1</Link>
              <Link to="/questions/2">Questions 2</Link>
              <Link to="/questions/3">Questions 3</Link>
              <Link to="/questions/4">Questions 4</Link>
              <Link to="/Progress Overview">Progress Overview</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

//Styling

// const div = styled.div`
//   text-align: center;
//   font-size: 15px;
//   font-family: Roboto;

// `;
