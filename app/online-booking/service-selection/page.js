'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../css/online-booking.css';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Services() {
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      localStorage.setItem('service', selectedOption);
      router.push(`/online-booking/step-one`);
    }
  };

  return (
    <>
      <Head>
        <title>Services | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <div id="wrapper">
        <div className="mb-3 pb-3">
          <Navbar name="Online Booking" />
        </div>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Choose Your Service</h1>
                <p className="subheading">Start by selecting a service type below to continue your booking.</p>
              </header>

              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="service-select" className="form-label">Select a Service</label>
                    <select
                      id="service-select"
                      className="form-control"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      required
                    >
                      <option value="">Choose a service...</option>
                      <option value="removal-services">Removal Service</option>
                      <option value="lawn-services">Lawn Services</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-dark btn-lg mt-3" disabled={!selectedOption}>
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <section id="three">
          <div className="inner">
            <header className="major">
              <h1>Service Areas</h1>
            </header>
            <div className="grid-area">
              {[
                "Ann Arbor, Michigan", "Ypsilanti, Michigan", "Belleville, Michigan",
                "Canton, Michigan", "Garden City, Michigan", "Livonia, Michigan",
                "Milan, Michigan", "Northville, Michigan", "Novi, Michigan",
                "Plymouth, Michigan", "Saline, Michigan", "Van Buren Township, Michigan",
                "Westland, Michigan", "Whitmore Lake, Michigan", "Wixom, Michigan",
                "Romulus, Michigan"
              ].map((city) => (
                <div key={city} className="city-item">{city}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="four">
          <div className="inner">
            <section className="contact-section">
              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:customerservice@metroarearemovalservices.com?subject=Estimate%20Request&body=I%20would%20like%20to%20request%20a%20free%20estimate">
                  customerservice@metroarearemovalservices.com
                </a>
              </div>

              <div className="contact-method">
                <h3>Phone</h3>
                <a href="tel:+17349854490">(734) 985-4490</a>
              </div>

              <div className="contact-method">
                <h3>Socials</h3>
                <ul className="social-links">
                  <li><a href="https://www.facebook.com/profile.php?id=61550591346858&mibextid=LQQJ4d">Facebook</a></li>
                  <li><a href="https://www.instagram.com/metroarearemovalservices/">Instagram</a></li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>
        {
          `
            .btn-dark {
              display: inline-flex; /* Use flexbox for alignment */
              justify-content: center; /* Center text horizontally */
              align-items: center; /* Center text vertically */
              background-color: #000; /* Black background */
              color: #fff; /* White text */
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 5px;
              font-size: 1rem;
              font-weight: 600;
              text-transform: uppercase;
              cursor: pointer;
              transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
            }

            .btn-dark:hover {
              background-color: #333; /* Slightly lighter black on hover */
            }

            .btn-dark:disabled {
              background-color: #e0e0e0; /* Gray background for disabled state */
              color: #666; /* Gray text for disabled state */
              cursor: not-allowed;
            }
          `
        }
      </style>
    </>
  );
  
}
