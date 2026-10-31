import logo from "../../assets/image/logo.png";

import { Link } from "react-router";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
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

          <div className={styles.searchContanier} >
            <button>
              <Search />
            </button>
          </div>

          {/* Notification */}

          <button>
            <Bell />

            <span>4</span>
          </button>

          {/* profile */}

          <div>
            <button>
              {/* user icon  */}
              <div>
                <User />
              </div>

              {/* dropdown  icon  */}
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
