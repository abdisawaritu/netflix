import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard() {
  return (
    <div>
      {/* poster image */}
      <img src="" alt="" />

      {/* hover card */}
      <div>
        {/* img */}
        <img src="" alt="" />
        {/* badge */}
        <div>badge</div>
        {/* button row */}

        <div>
            <FaCirclePlay/>
            <BsPlusCircle/>
            



        </div>
      </div>
    </div>
  );
}

export default MovieCard;
