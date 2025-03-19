import Head from 'next/head';
import Navbar from '@/app/components/Navbar';  // Replace with your actual navbar import
import Footer from '@/app/components/Footer';  // Replace with your actual footer import

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How Our Services Work | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="The Process" />

        {/* Main Content */}
        <main id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>HOW IT WORKS</h1>
                <p>A process that will allow you to rest easy</p>
              </header>
              {/* Add an image here if needed:
                <span className="image main">
                  <img src="/images/pic11.jpg" alt="How It Works" />
                </span>
              */}
              <p>
                Are you getting ready for a move? Need to declutter your home and get rid of
                unwanted junk? Or perhaps you&apos;re in the process of cleaning out your
                office or estate? Look no further than Metro Area Removal Services, a highly
                recommended junk removal company serving the community.
              </p>
              <p>
                Here&apos;s how our junk removal process works:
                <ol>
                  <li>Book your free appointment at a convenient time.</li>
                  <li>Meet with one of our professional junk haulers.</li>
                  <li>Receive a free, no-obligation estimate for the services.</li>
                  <li>We load your unwanted items into our truck(s).</li>
                  <li>Enjoy our complimentary clean-up service.</li>
                  <li>
                    Rest assured that your items will be locally recycled, donated, or
                    disposed of responsibly.
                  </li>
                </ol>
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
