const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Define routers */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);

/* Main app */
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
