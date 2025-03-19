import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Services() {
  const router = useRouter();

  // If you want to display success/error messages from Next.js state or server,
  // you'd store them in React state. For now, we'll comment them out.
  // const [success, setSuccess] = useState('');
  // const [error, setError] = useState('');

  // For the dropdown
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedValue) return;
    // In a Next.js app, you typically route to the chosen page:
    router.push(`/${selectedValue}`);
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
        {/* Typically, you'd import your global CSS in `app/layout.tsx` or `_app.js`, not here */}
        <style>
          {`
            h3 {
              margin-top: 5%;
              margin-bottom: -0.5%;
            }
          `}
        </style>
      </Head>

      <div id="wrapper">
        {/* Navbar (pass the name prop if your Navbar uses it) */}
        <Navbar name="Online Booking" />

        {/* Example success/error alerts if you have them in state */}
        {/* 
        {success && (
          <div className="alert alert-success">{success}</div>
        )}
        {error && (
          <div className="alert alert-danger">{error}</div>
        )}
        */}

        <main id="main" className="alt">
          <div className="container-fluid mt-4 pt-4">
            {/* Additional messages or layout could go here */}
          </div>

          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Choose Your Service</h1>
              </header>

              <div className="container">
                <form onSubmit={handleSubmit} id="myForm">
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="selectOption"
                      value={selectedValue}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="removal-services">Removal Service</option>
                      <option value="lawn-services">Lawn Services</option>
                    </select>
                    <button type="submit" className="btn btn-dark mt-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Service Areas */}
        <section id="three">
          <div className="inner">
            <header className="major">
              <h1>Service Areas</h1>
            </header>
            <ul>
              <li>Ann Arbor, Michigan</li>
              <li>Ypsilanti, Michigan</li>
              <li>Belleville, Michigan</li>
              <li>Canton, Michigan</li>
              <li>Garden City, Michigan</li>
              <li>Livonia, Michigan</li>
              <li>Milan, Michigan</li>
              <li>Northville, Michigan</li>
              <li>Novi, Michigan</li>
              <li>Plymouth, Michigan</li>
              <li>Saline, Michigan</li>
              <li>Van Buren Township, Michigan</li>
              <li>Westland, Michigan</li>
              <li>Whitmore Lake, Michigan</li>
              <li>Wixom, Michigan</li>
              <li>Romulus, Michigan</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="four">
          <div className="inner">
            <section style={{ color: 'black' }}>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope" />
                  <h3>Email</h3>
                  <a
                    href="mailto:customerservice@metroarearemovalservices.com
                      ?subject=Estimate%20Request&body=I%20would%20like%20to%20request%20a%20free%20estimate"
                  >
                    customerservice@metroarearemovalservices.com
                  </a>
                </div>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone" />
                  <h3>Phone</h3>
                  <a href="tel:+17349854490">
                    <span>(734) 985-4490</span>
                  </a>
                </div>
              </section>

              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home" />
                  <h3>Socials</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61550591346858&mibextid=LQQJ4d">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/metroarearemovalservices/">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
