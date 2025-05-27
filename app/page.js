'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/css/index.css';

export default function Home() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Simulate session messages
    const successMessage = localStorage.getItem('success');
    const errorMessage = localStorage.getItem('error');
    if (successMessage) setMessage({ type: 'success', text: successMessage });
    if (errorMessage) setMessage({ type: 'error', text: errorMessage });
  }, []);

  return (
    <>
      <Head>
        <title>Metro Area Removal Services | Home Services Company</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="Metro Area Removal Services is a family-owned company serving your removal needs. Learn about our services and get a free estimate." />
        <noscript><link rel="stylesheet" href="/css/noscript.css" /></noscript>
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="Welcome" />

        {/* Banner */}
        <section id="banner" className="major mb-1">
          <div className="container-fluid">
            {message && (
              <div className={`alert alert-${message.type}`}>
                {message.text}
              </div>
            )}
          </div>

          <div className="inner">
            <header className="major">
              <h1 style={{ color: 'white' }}>METRO AREA REMOVAL SERVICES</h1>
            </header>
            <div className="content">
              <p>Hours Of Operation: 9am - 5pm EST</p>
              <p>A Metro area company serving you and your business needs, we are family-owned and devoted to serving the community.</p>
              <ul className="actions">
                <li>
                  <a
                    href="#one"
                    className="button next scrolly"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('one')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div id="main">
          <section id="one" className="tiles">
            <article>
              <span className="image">
                <Image src="/images/pic01.jpg" alt="" width={400} height={300} />
              </span>
              <header className="major">
                <h3><Link href="/info/pricing" className="link">HOW MUCH DOES IT COST?</Link></h3>
                <p>Prices based on volume, <Link href="/info/pricing">click here to learn more</Link></p>
              </header>
            </article>

            <article>
              <span className="image">
                <Image src="/images/pic02.jpg" alt="" width={400} height={300} />
              </span>
              <header className="major">
                <h3><Link href="/info/hauled-items" className="link">WHAT ITEMS DO WE TAKE?</Link></h3>
                <p>To see the items available for hauling, <Link href="/info/hauled-items">click here to learn more</Link></p>
              </header>
            </article>

            <article>
              <span className="image">
                <Image src="/images/pic03.jpg" alt="" width={400} height={300} />
              </span>
              <header className="major">
                <h3><Link href="/online-booking/service-selection" className="link">WHEN CAN YOU PICK UP MY STUFF?</Link></h3>
                <p>We offer prompt service, with options for either same-day or next-day appointments. <Link href="/online-booking/service-selection">Click here to learn more</Link></p>
              </header>
            </article>
          </section>
        </div>
       {/* Lawn Services Section */}
<section id="lawn-services">
  <div className="inner">
    <header className="major">
      <h1>Lawn Services</h1>
    </header>
    <p>
      Metro Area Removal Services also offers professional lawn care services to keep your yard looking its best. 
      From mowing and trimming to seasonal cleanups, we are here to help you maintain a beautiful outdoor space.
    </p>

    {/* Pricing Table */}
    <div className="pricing-table">
      <h2>Typical Lawn Care Pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Service Type</th>
            <th>Typical Price Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mowing (weekly, standard lawn)</td>
            <td>$35 – $60 per visit</td>
          </tr>
          <tr>
            <td>Edging/Trimming</td>
            <td>Usually included with mowing or $10 – $25</td>
          </tr>
          <tr>
            <td>Spring/Fall Cleanup</td>
            <td>$150 – $400 one-time</td>
          </tr>
          <tr>
            <td>Aeration</td>
            <td>$50 – $120 per service</td>
          </tr>
          <tr>
            <td>Dethatching</td>
            <td>$100 – $250</td>
          </tr>
          <tr>
            <td>Fertilization (per treatment)</td>
            <td>$40 – $70</td>
          </tr>
          <tr>
            <td>Weed Control (per treatment)</td>
            <td>$50 – $80</td>
          </tr>
          <tr>
            <td>Full Lawn Care Package (monthly)</td>
            <td>$120 – $250</td>
          </tr>
          <tr>
            <td>One-time Lawn Cut</td>
            <td>$60 – $100</td>
          </tr>
        </tbody>
      </table>
    </div>

    <ul className="actions">
      <li>
        <a
          href="/online-booking/service-selection"
          className="button primary"
        >
          Book Lawn Services
        </a>
      </li>
      <li>
        <a
          href="tel:+17349854490"
          className="button"
        >
          Call Us: (734) 985-4490
        </a>
      </li>
    </ul>
  </div>
  <style jsx>{`
  #lawn-services {
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  padding: 2rem;
}

#lawn-services .inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.pricing-table {
  margin: 2rem 0;
  overflow-x: auto; /* Ensure table is scrollable on small screens */
}

.pricing-table h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #40e0d0; /* Turquoise for the heading */
}

.pricing-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}

.pricing-table th,
.pricing-table td {
  border: 1px solid #fff; /* White borders */
  padding: 0.75rem;
  text-align: left;
}

.pricing-table th {
  background-color: #333; /* Darker background for table headers */
  color: #fff; /* White text for headers */
  font-weight: bold;
}

.pricing-table td {
  background-color: #222; /* Slightly lighter black for table cells */
}

.pricing-table tr:nth-child(even) td {
  background-color: #1a1a1a; /* Alternate row color */
}

.pricing-table tr:hover td {
  background-color: #444; /* Highlight row on hover */
}

.actions .button {
  margin-top: 1rem;
}
  `}</style>
</section>
        {/* Service Areas */}
        <section id="four">
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
              ].map(city => <li key={city}>{city}</li>)}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
       {/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="bg-white text-black py-12">
  <div className="inner max-w-3xl mx-auto text-center space-y-8">
    <header className="major">
      <h1>Contact Us</h1>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Email */}
      <div className="contact-method">
        <span className="icon solid alt fa-envelope mb-2 block text-3xl text-blue-600"></span>
        <h3 className="text-xl font-semibold mb-1">Email</h3>
        <a
          href="mailto:customerservice@metroarearemovalservices.com?subject=Estimate%20Request&body=I%20would%20like%20to%20request%20a%20free%20estimate"
          className="text-blue-600 hover:underline"
        >
          customerservice@metroarearemovalservices.com
        </a>
      </div>

      {/* Phone */}
      <div className="contact-method">
        <span className="icon solid alt fa-phone mb-2 block text-3xl text-blue-600"></span>
        <h3 className="text-xl font-semibold mb-1">Phone</h3>
        <a href="tel:+17349854490" className="text-blue-600 hover:underline">
          (734) 985-4490
        </a>
      </div>

      {/* Socials */}
      <div className="contact-method">
        <span className="icon solid alt fa-home mb-2 block text-3xl text-blue-600"></span>
        <h3 className="text-xl font-semibold mb-1">Follow Us</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61550591346858&mibextid=LQQJ4d"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/metroarearemovalservices/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <style jsx>{`
    #contact {
      background-color: black;
    }
    .inner {
      padding: 0 1rem;
    }
  `}</style>
</section>

        {/* Footer */}
        <Footer />
      </div>
      {/* <style jsx>
        {`
      #contact {
      background-color: #fff;
    }
    .inner {
      padding: 0 1rem;
    }
        `}
        </style> */}
    </>
  );
}
