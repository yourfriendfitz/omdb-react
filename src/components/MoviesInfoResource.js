import { unstable_createResource } from "react-cache";
import MoviesResource from "./MoviesResource";

const MoviesInfoResource = unstable_createResource(() => {
  let movieInfoArray = [];
  movies.map(movie => {
    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=26332775`)
      .then(res => res.json())
      .then(data => movieInfoArray.push(data));
  });
  return movieInfoArray;
});

export default MoviesInfoResource;
