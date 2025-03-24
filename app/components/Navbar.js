'use client';
import { useState } from 'react';
import Link from 'next/link';
import '@/css/index.css';
export default function Navbar({ name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick(e) {
    e.preventDefault(); // Prevent "#" in URL
    console.log("Menu toggled:", !menuOpen);
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <style jsx>{`
        /* Navbar styling */
        #header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background: black;
          color: white;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1100;
        }

        .logo {
          font-weight: bold;
          text-transform: uppercase;
          color: white;
        }

        /* Hamburger Icon */
        .hamburger-icon {
          display: inline-block;
          cursor: pointer;
          padding: 10px;
        }

        .hamburger-icon span {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px 0;
          background: white;
          transition: 0.3s;
        }

        /* Menu Styling */
        #menu {
          position: fixed;
          top: 60px;
          left: 0;
          width: 100%;
          background: black;
          z-index: 1100;
          text-align: center;
          padding: 15px 0;

          /* Smooth dropdown effect */
          transform: ${menuOpen ? "translateY(0)" : "translateY(-150%)"};
          transition: transform 0.3s ease-in-out;

          /* Allow clicking links when open */
          pointer-events: ${menuOpen ? "auto" : "none"};
          opacity: ${menuOpen ? "1" : "0"};
        }

        /* Menu Links */
        .links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links li {
          padding: 10px 0;
        }

        .links a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }

        /* Close menu when clicking a link */
        .links a:hover {
          color: gray;
        }
      `}</style>

      {/* Navbar Header */}
      <header id="header">
        <Link href="/" className="logo">
          <strong>Metro Area Removal Services</strong>
          {' | '}
          {name ?? ''}
        </Link>

        {/* Hamburger Menu */}
        <a href="#" className="hamburger-icon" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </header>

      {/* Dropdown Menu */}
      <nav
        id="menu"
        style={{
          position: "fixed", // ensure menu stays at top
          top: "60px",
          left: 0,
          width: "100%",
          background: "black",
          zIndex: 1100,
          textAlign: "center",
          padding: "15px 0",

          // Animation handling
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",

          // Prevent clicks when hidden
          pointerEvents: menuOpen ? "auto" : "none",
          display: menuOpen ? 'block' : 'none',
          marginBottom: '20px',
          marginTop: '10px',
          visibility: menuOpen ? 'visible' : 'hidden',
          opacity: menuOpen ? '1' : '0',
          position: 'absolute',
          // The nuclear option: !important
          // Note that React doesn't directly support !important,
          // but we can do this trick using a template string for the style.
          // (Slight hack: style objects don't allow !important.)
        }}
      >
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/hauled-items">Services</Link>
          </li>
          <li>
            <Link href="/choose-service">Schedule your haul</Link>
          </li>
          <li>
            <Link href="/how-it-works">The Process</Link>
          </li>
          <li>
            <Link href="/online-booking/service-selection">Online Booking</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
