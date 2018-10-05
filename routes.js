const routes = require("next-routes");

module.exports = routes()
  .add("index", "/")
  .add("connected", "/connected")
  .add("about", "/about")
  .add("dynamic", "/dynamic")
  .add("item", "/item/:id");
