const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use("/api", router);
app.use(middlewares);
// Handle React routing, return all requests to React app

app.get("*", (req, res) => {
  // eslint-disable-line no-unused-vars
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
