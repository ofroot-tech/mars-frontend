'use client';
import Head from 'next/head';
import Navbar from  '../../components/Navbar';   // Replaces <x-nav-bar>
// import Contact from '../../components/Contact'; // Replaces <x-contact>
import Footer from  '../../components/Footer';   // Replaces <x-footer>

// This is the Pricing page
export default function Pricing() {
  return (
    <>
      <Head>
        <title>Our Pricing | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="Pricing" />

        {/* Main Content */}
        <main id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>OUR PRICING</h1>
              </header>

              <p>
                Our company stands out for our commitment to transparent pricing and 
                no-obligation estimates. We believe that our customers should know 
                exactly what they're paying for, and we take pride in providing clear 
                and easy-to-understand pricing for all of our services. Additionally, 
                we always offer free estimates with no obligation, so you can make an 
                informed decision about whether our services are right for you.
              </p>
            </div>
          </section>
        </main>

        {/* Contact Section */}
        <section>
          {/* <Contact /> */}
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
