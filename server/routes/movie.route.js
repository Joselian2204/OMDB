import { Router } from "express";
import { deleteCountry, getCountries, getCountry, setCountry, updateCountry } from "../controllers/country.controller.js"

const movieRouter = Router();

movieRouter.post("/", setMovie)

movieRouter.put("/:id", setFav)

movieRouter.delete("/:id", deleteMovie)

export default movieRouter;