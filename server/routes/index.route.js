import { Router } from "express";
import movieRoute from "./movie.route.js";

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Welcome")
})

indexRouter.use(`${prefix}/movie`, countryRouter);

export default indexRouter;
