import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({movie}) {
  let genres = ["Adventure", " Action", "Thriller"];
  return (
    <div className= {styles.cardWrapper} >
      {/* poster image */}
      <img className={styles.poster} src={movie.poster_path} alt=" Poste image" />

      {/* hover card */}
      <div className={styles.hoverCard} >
        {/* img */}
        <img src={movie.poster_path} alt="hover image" />
        {/* badge */}
        <div className= {styles.badge} >Recently added</div>
        {/* button row */}

        <div className={styles.buttonsRow} >
          <FaCirclePlay color="white" size={40} />
          <BsPlusCircle color="white" size={40} />
          <GoCheckCircleFill color="white" size={40} />
          <IoIosArrowDropdownCircle color="white" size={40} />
          <IoIosArrowDropdownCircle className={ } color="white" size={40} />
        </div>

        {/* meta data  */}
        <div className={styles.metaRow} >
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>
        {/* genres */}
        <div className= {stycle.growth} >
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && <span className={styles.dot} >• </span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
