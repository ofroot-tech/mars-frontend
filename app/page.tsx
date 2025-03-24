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
                <h3><Link href="/pricing" className="link">HOW MUCH DOES IT COST?</Link></h3>
                <p>Prices based on volume, <Link href="/pricing">click here to learn more</Link></p>
              </header>
            </article>

            <article>
              <span className="image">
                <Image src="/images/pic02.jpg" alt="" width={400} height={300} />
              </span>
              <header className="major">
                <h3><Link href="/hauled-items" className="link">WHAT ITEMS DO WE TAKE?</Link></h3>
                <p>To see the items available for hauling, <Link href="/hauled-items">click here to learn more</Link></p>
              </header>
            </article>

            <article>
              <span className="image">
                <Image src="/images/pic03.jpg" alt="" width={400} height={300} />
              </span>
              <header className="major">
                <h3><Link href="/schedule-pickup" className="link">WHEN CAN YOU PICK UP MY STUFF?</Link></h3>
                <p>We offer prompt service, with options for either same-day or next-day appointments. <Link href="/schedule-pickup">Click here to learn more</Link></p>
              </header>
            </article>
          </section>
        </div>

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
        <section id="three">
          <div className="inner">
            <header className="major">
              <h1>Connect with us</h1>
            </header>
            <p>Contact us here for more information on our services and to receive a <Link href="/online-booking/service-selection">free estimate</Link></p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
