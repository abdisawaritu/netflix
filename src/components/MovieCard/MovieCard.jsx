import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard() {
  let genres = ["Adventure", " Action", "Thriller"];
  return (
    <div>
      {/* poster image */}
      <img src="" alt="" />

      {/* hover card */}
      <div>
        {/* img */}
        <img src="" alt="" />
        {/* badge */}
        <div>Recently added</div>
        {/* button row */}

        <div>
          <FaCirclePlay color="white" size={40} />
          <BsPlusCircle color="white" size={40} />
          <GoCheckCircleFill color="white" size={40} />
          <IoIosArrowDropdownCircle color="white" size={40} />
          <IoIosArrowDropdownCircle color="white" size={40} />
        </div>

        {/* meta data  */}
        <div>
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>
        {/* genres */}
        <div>
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && <span>• </span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
