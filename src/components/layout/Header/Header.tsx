"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

// Define the type for your navigation link objects
interface NavLink {
  href: string;
  label: string;
}

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speaker", label: "SPEAKERS" },
    { href: "/earphones", label: "EARPHONES" },
  ];

  // ✅ Type-safe active check function
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.navbar}>
      {/* Desktop Nav */}
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className="navbar-brand">
          <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
        </Link>

        <ul className={`navbar-nav ${styles.navGroupLink}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
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

        <div className={styles.navActions}>
          <Link href="/cart">
            <Image
              className={styles.cartIcon}
              src="/assets/carts.svg"
              alt="cart"
              width={23}
              height={20}
            />
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`container ${styles.mobileNavContainer}`}>
        <button
          className={`navbar-toggler ${styles.hamburgerBtn}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            className={styles.hamburger}
            src="/assets/hamburger.svg"
            alt="hamburger"
            width={16}
            height={15}
          />
        </button>

        <Link href="/" className="navbar-brand me-sm-auto">
          <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
        </Link>

        <Link href="/cart">
          <Image
            className={styles.cartIcon}
            src="/assets/carts.svg"
            alt="cart"
            width={23}
            height={20}
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`container navbar-nav ${styles.mobileNavGL} ${styles.navGroupLink}`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`nav-link ${
                  isActive(link.href) ? "active" : ""
                } ${styles.navLink}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
