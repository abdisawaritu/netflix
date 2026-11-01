import axios from "axios";

const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { movieInstance };




// https://api.themoviedb.org/3/trending/all/week?api_key=0bbdd89cf3be1f63ccb925c86140781b&language=en-US
//https://api.themoviedb.org/3/account/null/rated/movies?language=en-US&page=1&sort_by=created_at.asc' \
// https://api.themoviedb.org/3/discover/movie?api_key=0bbdd89cf3be1f63ccb925c86140781b    &with_genres=99

