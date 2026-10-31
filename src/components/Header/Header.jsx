import logo from "../../assets/image/logo.png";

import { Link } from "react-router";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // for blur

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` ${styles.header}  ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.contanier}>
        {/* logo */}

        <img className={styles.logo} src={logo} alt="Logo Image" />

        {/* Navigation  Link */}

        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            New & Popular
          </Link>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            My List
          </Link>
          <Link className={styles.navLink} href="">
            Browse by Language
          </Link>
        </nav>

        {/* right  Side  Section */}

        <div className={styles.rightSection}>
          {/* search */}

          <div className={styles.searchContanier}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* Notification */}

          <button className={styles.iconButton}>
            <Bell />

            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* profile */}

          <div className={styles.profileContanier}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon  */}
              <div className={styles.profileAvator}>
                <User />
              </div>

              {/* dropdown  icon  */}
              <ChevronDown />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>Help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
