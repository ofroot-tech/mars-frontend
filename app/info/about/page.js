'use client';
import Head from 'next/head';
import Navbar from  '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from  '../../components/Footer';


export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta charSet="utf-8" />
        {/* 
          If needed, you can import CSS globally in `app/layout.tsx` (Next.js 13 App Router) 
          or `_app.js` (Next.js Pages Router) instead of using <link> tags. 
        */}
      </Head>

      {/* Wrapper */}
      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="About Us" />

        {/* Main Content */}
        <main id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>US &amp; OUR MISSION</h1>
              </header>
              <p>
                At Metro Area Removal Services, we are dedicated to providing our
                customers with high-quality and reliable junk removal services.
                We understand that clearing out your home or office can be a
                daunting task, and that's why we're here to help.
              </p>
              <p>
                Our company stands out for our commitment to transparent pricing
                and no-obligation estimates. We believe that our customers should
                know exactly what they're paying for, and we take pride in
                providing clear and easy-to-understand pricing for all of our
                services. Additionally, we always offer free estimates with no
                obligation, so you can make an informed decision about whether
                our services are right for you.
              </p>
              <p>
                But we don't just stop at hauling away your junk. We also offer a
                donation pickup service to help our customers give back to their
                communities. We work with local charities to ensure that any
                usable items are given a second life and don't end up in a
                landfill.
              </p>
              <p>
                No matter what type of junk you need removed, we have you covered.
                We haul a wide range of materials, including furniture,
                appliances, carpeting, mattresses and boxsprings, scrap metal,
                tires, office equipment, yard debris, hot tubs, paint, and many
                other items. Our team is equipped with the tools and experience
                necessary to handle any job, big or small.
              </p>
              <p>
                At Metro Area Removal Services, our goal is to make junk removal
                as easy and stress-free as possible for our customers. Contact us
                today to learn more about our services and schedule your free
                estimate.
              </p>
            </div>
          </section>
        </main>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
