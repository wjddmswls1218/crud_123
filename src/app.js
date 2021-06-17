import express from "express";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import connect from "../db";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
