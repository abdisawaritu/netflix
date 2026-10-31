import NetflixBannerImage from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css"
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* netflix image  */}
        <img
          className={styles.logoImg}
          src={NetflixBannerImage}
          alt="Netflix Logo"
        />

        {/* title */}
        <h1 className={styles.title}> Bridgerton</h1>

        {/* description */}
        <h1 className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as wight siblings seek their perfect match amid Londos's scandals and
          soiress.
        </h1>

        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            {" "}
            <Play size={30} /> Play
          </button>
          <button className={styles.button}>
            <Info size={30} /> My List
          </button>
        </div>
      </div>

      {/* fading effect */}

      <div className={styles.fadeBottom} >


      </div>
    </div>
  );
};

export default Banner;
