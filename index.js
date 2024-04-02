const express = require("express");
const bodyParser = require("body-parser");
const { default: PluginManager } = require("./pluginManager");

const pluginManager = new PluginManager(__dirname);
pluginManager.registerPlugin({
  name: "default",
  packagename: "./plugins/default",
});
pluginManager.registerPlugin({
  name: "date",
  packagename: "./plugins/date",
});

// declare a new express app
const app = express();
app.use(bodyParser.json());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/plugins/example", (req, res) => {
  const response = pluginManager.loadPlugin("default").getText();
  res.send(response);
});

app.get("/plugins/example/:id", (req, res) => {
  if (!pluginManager.hasPlugin(req.params.id)) {
    const response = pluginManager.loadPlugin("default").getText();
    res.send(response);
  } else {
    const response = pluginManager.loadPlugin(req.params.id).getText();
    res.send(response);
  }
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
