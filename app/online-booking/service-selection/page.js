'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <div className="mb-3 pb-3">
          <Navbar name="Online Booking" />
        </div>

        {/* Main Content */}
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Choose Your Service</h1>
              </header>

              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="removal-services">Removal Service</option>
                      <option value="lawn-services">Lawn Services</option>
                    </select>
                    <button type="submit" className="btn btn-dark mt-4">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Service Areas */}
        <section id="three">
          <div className="inner">
            <header className="major">
              <h1>Service Areas</h1>
            </header>
            <ul>
              {[
                "Ann Arbor, Michigan", "Ypsilanti, Michigan", "Belleville, Michigan",
                "Canton, Michigan", "Garden City, Michigan", "Livonia, Michigan",
                "Milan, Michigan", "Northville, Michigan", "Novi, Michigan",
                "Plymouth, Michigan", "Saline, Michigan", "Van Buren Township, Michigan",
                "Westland, Michigan", "Whitmore Lake, Michigan", "Wixom, Michigan",
                "Romulus, Michigan"
              ].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="four">
          <div className="inner">
            <section>
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
                <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=61550591346858&mibextid=LQQJ4d">Facebook</a></li>
                  <li><a href="https://www.instagram.com/metroarearemovalservices/">Instagram</a></li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        #wrapper {
          background: #ffffff;
          color: #000000;
          padding: 2rem;
        }

        .inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .form-container {
          background-color: #fafafa;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          margin-top: 2rem;
        }

        .form-group select,
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #ffffff;
          color: #000000;
        }

        h1, h3 {
          color: #000;
          margin-bottom: 1rem;
        }

        .contact-method {
          margin-bottom: 1.5rem;
        }

        .contact-method a {
          color: #000;
          text-decoration: underline;
        }

        .contact-method a:hover {
          color: #444;
        }

        ul {
          padding-left: 1.2rem;
        }
      `}</style>
    </>
  );
}
