const next = require("next");
const url = require("url");
const { createServer } = require("http");
const { createReadStream } = require("fs");
const routes = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;
    if (pathname === "/sw.js") {
      res.setHeader("content-type", "text/javascript");
      createReadStream("./serviceWorker/index.js").pipe(res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
