'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Services() {
  const [zipCode, setZipCode] = useState('');
  const [message, setMessage] = useState(null);

  const serviceAreas = [
    "Ann Arbor, Michigan", "Ypsilanti, Michigan", "Belleville, Michigan",
    "Canton, Michigan", "Garden City, Michigan", "Livonia, Michigan",
    "Milan, Michigan", "Northville, Michigan", "Novi, Michigan",
    "Plymouth, Michigan", "Saline, Michigan", "Van Buren Township, Michigan",
    "Westland, Michigan", "Whitmore Lake, Michigan", "Wixom, Michigan", "Romulus, Michigan"
  ];

  const goto = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      setMessage({ type: 'error', text: 'Please enter a valid 5-digit zip code.' });
      return;
    }
    localStorage.setItem('service', zipCode);
    setMessage({ type: 'success', text: `Zip Code ${zipCode} submitted successfully!` });
    goto.push(`/online-booking/step-two`);
  };

  return (
    <>
      <Head>
        <title>Services | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous" />
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="Online Booking" />

        {/* Success/Error Messages */}
        <div className="container-fluid mt-4 pt-4">
          {message && (
            <div className={`alert alert-${message.type}`}>
              {message.text}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Enter your Zip Code</h1>
              </header>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="zip_code"
                      placeholder="Zip Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      maxLength="5"
                      required
                    />
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
              {serviceAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="four">
          <div className="inner">
            <header className="major">
              <h1>Have a job for us?</h1>
            </header>
            <p>Contact us here for more information on our services and to receive a <Link href="/online-booking/service-selection">free estimate</Link>.</p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scoped CSS using styled-jsx */}
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

        .form-group input {
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

        ul {
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: #000;
          text-decoration: underline;
        }

        a:hover {
          color: #444;
        }
      `}</style>
    </>
  );
}
