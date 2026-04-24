import express from "express";
import cors from "cors"
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
 const app = express();
 
app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173",  
    credentials: true,
  })
);

app.use(cookieParser())
app.use("/api",userRoute)

 

export default app;
