'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import 'app/css/online-booking.css';

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
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous" /> */}
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

      <style jsx>{`
  // .form-group {
  //   display: flex;
  //   flex-direction: column; /* Stack input and button vertically */
  //   align-items: center; /* Center-align the button and input */
  //   gap: 1rem; /* Add spacing between input and button */
  // }
      h1 {
      color: black !important;
      }
.btn-dark {
    display: inline-flex; /* Use flexbox for alignment */
    justify-content: center; /* Center text horizontally */
    align-items: center; /* Center text vertically */
    background-color: #000; /* Black background */
    color: #fff; /* White text */
    border: 2px solid #fff; /* White border */
    padding: 0.75rem 1.25rem; /* Adjusted padding for better spacing */
    font-size: 1rem; /* Standard font size */
    font-weight: 600; /* Slightly bold text */
    text-transform: uppercase; /* Uppercase text for emphasis */
    border-radius: 8px; /* Slightly rounded corners */
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* Smooth transitions */
    cursor: pointer; /* Pointer cursor for better UX */
    text-align: center; /* Ensure text alignment */
  }

  .btn-dark:hover {
    background-color: #40e0d0; /* Turquoise background on hover */
    color: #fff; /* White text on hover */
    border-color: #40e0d0; /* Turquoise border on hover */
  }

  .btn-dark:disabled {
    background-color: #e0e0e0; /* Gray background for disabled state */
    color: #666; /* Gray text for disabled state */
    border: 1px solid #ccc; /* Gray border for disabled state */
    cursor: not-allowed; /* Disabled cursor */
  }

  .btn-dark:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 0 3px rgba(64, 224, 208, 0.5); /* Turquoise focus ring */
  }
`}</style>
    </>
  );
}
