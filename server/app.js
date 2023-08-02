import express from "express";
import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

//middleware-----------
app.use(express.json());

//routes---------------
app.use("/", indexRouter);
app.use("*", (req, res) =>{
    res.send("404 -- not found")
})

//server runing------------
app.listen(app.get("port"), () =>{
    console.log("server is running on port",app.get("port"));
})

//DB connection----------
db.connect().then(() =>{
    console.log("Connected to DB")
}).catch((err) => {
    console.log("Error: ", err)
})