'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        #footer {
          /* Add your footer styling here or use external CSS */
        }
        .inner {
          /* Additional styling for footer inner container */
        }
        .icons {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .icons li {
          margin: 0 0.5rem;
        }
        .icons li a {
          text-decoration: none;
        }
        .copyright {
          list-style: none;
          color: white;
          padding: 0;
          text-align: center;
        }
        hr {
          margin: 1rem 0;
        }
      `}</style>

      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#" className="icon brands alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-linkedin-in">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>

          <ul className="copyright">
            <li>
              &copy; 2023 Metro Area Removal Services.
              <br />
              <br />
              All rights reserved.
              <br />
              <br />
              Metro Area Removal Services
              <br />
              <hr />
              Design:{' '}
              <Link href="https://ofroot.tech">
                OFROOT a technology company
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
