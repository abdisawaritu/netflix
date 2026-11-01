
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  // Social media links
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/netflix",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/netflix",
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/netflix",
      label: "Twitter",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/netflix",
      label: "YouTube",
    },
  ];

  // Footer links organized into four columns
  const footerColumns = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media Icons */}
        <div className={styles.socialLinks}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={styles.socialIcon}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Navigation Links */}
        <nav className={styles.footerLinks}>
          {footerColumns.map((column, index) => (
            <ul key={index} className={styles.footerColumn}>
              {column.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>© 1997-2026 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
