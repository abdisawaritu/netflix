import NetflixBannerImage from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { useEffect, useState } from "react";
import { movieInstance } from "../../Utility/MovieInstance.js";
import requests from "../../Utility/RequestUrls.js";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const response = await movieInstance.get(
          requests.fetchNetflixOriginals,
        );

        setBannerImage(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ],
        );
      } catch (error) {
        console.error("Error fetching banner image:", error);
      }
    };

    fetchBannerImage();
  }, []);
  console.log(bannerImage);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: bannerImage?.backdrop_path
          ? `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
          : "none",
      }}
    >
      <div className={styles.contents}>
        {/* netflix image  */}
        <img
          className={styles.logoImg}
          src={NetflixBannerImage}
          alt="Netflix Logo"
        />

        {/* title */}
        <h1 className={styles.title}> {bannerImage?.original_name || bannerImage?.title} </h1>

        {/* description */}
        <h1 className={styles.description}>
          {truncateString(bannerImage?.overview, 150)}
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

      <div className={styles.fadeBottom}></div>
    </div>
  );
};
export default Banner;
