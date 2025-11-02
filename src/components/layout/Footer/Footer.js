"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speaker", label: "SPEAKERS" },
    { href: "/earphones", label: "EARPHONES" },
  ];

  // Check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    
    <div className={styles.footerBody}>
        <div className='container'>
            <div className={styles.footerLine}></div>
        </div>
      <div className={`container ${styles.footerP}`}>
        <div className="d-md-flex text-center text-sm-start justify-content-between">
          <Image src="/assets/logo.svg" alt="logo" width="143" height="25" />

          <ul className={styles.footerLinkG}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.footerLinkList}>
                <Link
                  href={link.href}
                  className={`nav-link ${
                    isActive(link.href) ? "active" : ""
                  } ${styles.navLink}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={` d-flex justify-content-between ${styles.contextF}`}>
          <p className={styles.fTexts}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          {/* socials */}
          <div
            className={`d-md-flex d-none align-items-end ${styles.socialIconCon}`}
          >
            {/* facebook */}
            <a
              className={styles.socialLink}
              href="https://github.com/Odusami?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookBoxFill className={styles.socialIcon} />
            </a>

            {/* twitter */}
            <a
              className={styles.socialLink}
              href="https://github.com/Odusami?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>

            {/* instagram */}
            <a
              className={styles.socialLink}
              href="https://github.com/Odusami?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={`d-sm-flex justify-content-between align-items-center ${styles.footerBP}`}>
          <p className={`${styles.fTexts} ${styles.fTexts2}`}>Copyright 2021. All Rights Reserved</p>
          {/* socials */}
          <div
            className={`justify-content-center d-flex d-md-none  ${styles.socialIconCon}`}
          >
            {/* facebook */}
            <a
              className={styles.socialLink}
              href="https://github.com/Odusami?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookBoxFill className={styles.socialIcon} />
            </a>

            {/* twitter */}
            <a
              className={styles.socialLink}
              href="https://github.com/Odusami?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>

            {/* instagram */}
            <a
              className={styles.socialLink}
              href="https://github.com/Odusami?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
