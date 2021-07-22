const Express = require("express");
const cors = require("cors");
const app = Express();
const routes = require("./routes");

// const corsOptions={
//   origin:""
// }

app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(cors());
app.use("/", routes);
module.exports = app;
