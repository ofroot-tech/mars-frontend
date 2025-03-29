'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from  '@/components/Navbar';
import Footer from  '@/components/Footer';

export default function Services() {
  // Form state
  const [zipCode, setZipCode] = useState('');
  const [message, setMessage] = useState(null);

  // Service areas we cover
  const serviceAreas = [
    "Ann Arbor, Michigan",
    "Ypsilanti, Michigan",
    "Belleville, Michigan",
    "Canton, Michigan",
    "Garden City, Michigan",
    "Livonia, Michigan",
    "Milan, Michigan",
    "Northville, Michigan",
    "Novi, Michigan",
    "Plymouth, Michigan",
    "Saline, Michigan",
    "Van Buren Township, Michigan",
    "Westland, Michigan",
    "Whitmore Lake, Michigan",
    "Wixom, Michigan",
    "Romulus, Michigan",
  ];

  // Router instance
  const goto = useRouter();
  // Handle form submission (do the following when the form is submitted)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      setMessage({ type: 'error', text: 'Please enter a valid 5-digit zip code.' });
      return;
    }
    if (zipCode) {
      localStorage.setItem('service', zipCode); // pass to next page
      goto.push(`/online-booking/step-two`);
    }
    setMessage({ type: 'success', text: `Zip Code ${zipCode} submitted successfully!` });
  };

  return (
    <>
      <Head>
        <title>Services | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
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
              <div className="container">
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
            <p>Contact us here for more information on our services and to receive a free estimate.</p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
