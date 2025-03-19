import Head from 'next/head';
import Navbar from '@/app/components/Navbar';   // Replaces <x-nav-bar>
import Contact from '@/app/components/Contact'; // Replaces <x-contact>
import Footer from '@/app/components/Footer';   // Replaces <x-footer>

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Metro Area Removal Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <style>{`
          h3 {
            margin-top: 5%;
            margin-bottom: -0.5%;
          }
        `}</style>
      </Head>

      <div id="wrapper">
        {/* Navbar */}
        <Navbar name="SERVICES" />

        {/* Main Content */}
        <main id="main" className="alt">
          {/* Section One */}
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>SERVICES</h1>
              </header>
              <p>Hours Of Operation: 9am - 5pm est</p>
              <p>
                At Metro Area Removal Services, we provide hassle-free solutions for all
                your junk removal requirements. Our team of experts is well-equipped to
                tackle the chaos of disorganized areas, whether it&apos;s in residential
                or commercial properties.
              </p>

              <div className="row">
                <div className="col-lg-3 col-md-6 service-offerings">
                  <h3>Junk Removal</h3>
                  <ul>
                    <li>Appliance Removal</li>
                    <li>Brush Removal</li>
                    <li>Carpet Removal</li>
                    <li>Construction Debris Removal</li>
                    <li>Removal of junk and cleaning out garages</li>
                    <li>Cleanup and removal for hoarding situations</li>
                    <li>Hot Tub Removal</li>
                    <li>Office Junk Removal</li>
                    <li>Services for cleaning out storage units</li>
                    <li>Recovery services after storms</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h3>Furniture Removal</h3>
                  <ul>
                    <li>Dresser Removal</li>
                    <li>Mattress Removal</li>
                    <li>Piano Removal</li>
                    <li>Pool Table Removal</li>
                    <li>Office Furniture Removal</li>
                    <li>Cubicle Removal</li>
                    <li>Commercial Furniture Removal</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h3>Demo &amp; Removal</h3>
                  <ul>
                    <li>Bathroom &amp; Kitchen Demo removal</li>
                    <li>Deck Demo &amp; Removal</li>
                    <li>Drywall Demo Removal</li>
                    <li>Fence Demo &amp; Removal</li>
                    <li>Interior Demo Removal</li>
                    <li>Pool Demo &amp; Removal</li>
                    <li>Tile Demo Removal</li>
                    <li>Shed Demo &amp; Removal</li>
                    <li>Services for cleaning out storage units</li>
                    <li>Recovery services after storms</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h3>Cleanout Services</h3>
                  <ul>
                    <li>Apartment Cleanouts</li>
                    <li>Bereavement Cleanouts</li>
                    <li>Commercial/Office Cleanouts</li>
                    <li>Cleanout services for estates</li>
                    <li>Estate Cleanouts</li>
                    <li>Foreclosure Cleanouts</li>
                    <li>Hoarding Cleanouts</li>
                    <li>Home Cleanouts</li>
                    <li>Storage Unit Cleanouts</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section Two */}
          <section id="two">
            <div className="inner">
              <header className="major">
                <h1>SAME OR NEXT DAY PICKUP</h1>
              </header>
              <p>
                If you&apos;re unsure about what items we can remove, rest assured that our
                teams are willing to take most non-hazardous items from your property.
                We specialize in various common and unique junk removal needs and can
                handle everything from large appliances and old tires to electronics.
                You can count on our trained professionals to efficiently remove these
                items from your hands.
              </p>

              <ul>
                <li>Appliances</li>
                <li>Carpets</li>
                <li>Construction debris</li>
                <li>Electronics</li>
                <li>Exercise equipment</li>
                <li>Furniture</li>
                <li>Hot tubs</li>
                <li>Paint disposal</li>
                <li>Pianos</li>
                <li>Mattresses</li>
                <li>Scrap Metal</li>
                <li>Storage Sheds</li>
                <li>Trash pickup</li>
                <li>TV Disposal</li>
                <li>Yard waste</li>
              </ul>
            </div>
          </section>
        </main>

        {/* Section Three: Service Areas */}
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

        {/* Section Four: Contact */}
        <section id="four">
          <div className="inner">
            <header className="major">
              <h1>Have a job for us?</h1>
            </header>
            <p>Contact us here for more information on our services and to receive a free estimate</p>
            <Contact />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
