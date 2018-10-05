const routes = require("next-routes");

module.exports = routes()
  .add("index", "/")
  .add("connected", "/connected")
  .add("about", "/about")
  .add("item", "/item/:id");
