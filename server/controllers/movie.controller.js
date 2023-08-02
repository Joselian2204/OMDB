import * as movieServices from "../services/movie.service.js";

export const setMovie = (req, res) => {
    const movie = req.body;
  
    movieServices
      .setMovie(movie)
      .then(() => {
        res.status(200).json({
          message: "Movie added successfully",
          data: movie,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };