import MovieCard from "../MovieCard/MovieCard";
import styles from "./SlideShow.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "Swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

const SlideShow = ({ title, movies }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8}
        >
          {movies?.map((movie) => (
            <SwiperSlide  key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
