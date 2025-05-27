'use client';
import Head from 'next/head';
import Navbar from '@/components/Navbar'; // Replace with your actual navbar import
import Footer from '@/components/Footer'; // Replace with your actual footer import

export default function LawnServices() {
  return (
    <>
      <Head>
        <title>Lawn Services | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="Lawn Services" />

        {/* Main Content */}
        <main id="main" className="alt">
            
          <section id="one">
          <header className="major">
                <h1>Lawn Services</h1>
                <p>Professional lawn care services to keep your yard looking its best.</p>
              </header>
            <div className="inner">
              {/* <header className="major">
                <h1>Lawn Services</h1>
                <p>Professional lawn care services to keep your yard looking its best.</p>
              </header>
              <p>
                Metro Area Removal Services also offers professional lawn care services to keep your yard looking its best. 
                From mowing and trimming to seasonal cleanups, we are here to help you maintain a beautiful outdoor space.
              </p> */}

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
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      <style jsx>{`
  
  
  #wrapper {
    background-color: #000; /* Black background */
    color: #fff; /* White text */
  }

  .inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center; /* Center-align content */
    padding: 2rem;
  }

  .inner h1 {
    text-align: center; /* Center the header */
    margin-bottom: 1rem;
  }
     .major {
    text-align: left !important; /* Center-align the entire header */
    padding-left: 4rem; /* Add padding to the left */
  }

       .major {
    text-align: left !important; /* Center-align the entire header */
    padding-left: 4rem; /* Add padding to the left */
  }

  .major p {
    margin-top: 0.5rem;
    font-size: 1rem; /* Adjust font size if needed */
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

  .actions {
    display: flex;
    justify-content: center; /* Center the actions */
    gap: 1rem; /* Add spacing between buttons */
    margin-top: 2rem;
  }

  .actions .button {
    margin-top: 0; /* Remove default margin */
  }

  .button.primary {
    background-color: #40e0d0; /* Turquoise button */
    color: #000; /* Black text */
  }

  .button.primary:hover {
    background-color: #33c2b0; /* Darker turquoise on hover */
  }

  .button {
    background-color: #fff; /* White button */
    color: #000; /* Black text */
  }

  .button:hover {
    background-color: #ddd; /* Light gray on hover */
  }
`}</style>
    </>
  );
}