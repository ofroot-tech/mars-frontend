'use client';
// contact 
export default function Contact() {
  return (
    <>
      <section id="contact" style={{ color: 'black' }}>
        <section style={{ color: 'white' }}>
          <section>
            <div className="contact-method">
              <span className="icon solid alt fa-envelope"></span>
              <h3>Email</h3>
              <a
                href="mailto:customer.mar.services@gmail.com
                      ?subject=Estimate%20Request&body=I%20would%20like%20to%20request%20a%20free%20estimate"
              >
                customer.mar.services@gmail.com
              </a>
            </div>

            <div className="contact-method">
              <span className="icon solid alt fa-phone"></span>
              <h3>Phone</h3>
              <a href="tel:+17349854490">
                <span>(734) 985-4490</span>
              </a>
            </div>
          </section>

          <section>
            <div className="contact-method">
              <span className="icon solid alt fa-home"></span>
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
      </section>
    </>
  );
}
