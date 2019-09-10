import { unstable_createResource } from "react-cache";

const MoviesResource = unstable_createResource(() => {
  return fetch(`http://www.omdbapi.com/?s=batman&apikey=26332775`)
    .then(resp => resp.json())
    .then(data => data.Search);
});

export default MoviesResource;
