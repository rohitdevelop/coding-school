import dotenv from "dotenv";
import app from "./src/app.js";
import dbconnect from "./src/config/db.js";
dotenv.config();
const port = 3000;
dbconnect();

app.listen(port, () => {
  console.log("app running in", port);
});
