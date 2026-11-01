import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movieInstance } from "../../Utility/MovieInstance.js";
import requests from "../../Utility/RequestUrls.js";
import { useEffect, useState } from "react";

const DisplayRow = () => {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [
          trendingResponse,
          netflixOriginalsResponse,
          topRatedResponse,
          actionResponse,
          comedyResponse,
          horrorResponse,
          romanceResponse,
          documentariesResponse,
        ] = await Promise.all([
          movieInstance.get(requests.fetchTrending),
          movieInstance.get(requests.fetchNetflixOriginals),
          movieInstance.get(requests.fetchTopRatedMovies),
          movieInstance.get(requests.fetchActionMovies),
          movieInstance.get(requests.fetchComedyMovies),
          movieInstance.get(requests.fetchHorrorMovies),
          movieInstance.get(requests.fetchRomanceMovies),
          movieInstance.get(requests.fetchDocumentaries),
        ]);

        setMovies({
          trending: trendingResponse.data.results,
          netflixOriginals: netflixOriginalsResponse.data.results,
          topRated: topRatedResponse.data.results,
          action: actionResponse.data.results,
          comedy: comedyResponse.data.results,
          horror: horrorResponse.data.results,
          romance: romanceResponse.data.results,
          documentaries: documentariesResponse.data.results,
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="popular on netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
    </div>
  );
};

export default DisplayRow;
