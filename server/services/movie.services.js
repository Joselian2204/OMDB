export const setCountry = (movie) => {
    return new Promise((resolve, reject) => {
  
      const query = "INSERT INTO movie (title, year, director, genre) VALUES (?, ?, ?)";

      const {title , year, director, genre} = movie;
  
      db.execute(query, [title , year, director, genre])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };