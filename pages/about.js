import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Metro Area Removal Services</title>
        <meta name="description" content="Learn more about Metro Area Removal Services, a family-owned business dedicated to providing top-quality removal services." />
      </Head>

      <Navbar />

      <main className="container">
        <section className="about">
          <h1>About Metro Area Removal Services</h1>
          <p>We are a family-owned company dedicated to providing top-quality removal services in Michigan.</p>
          <p>Our mission is to serve the community with efficiency, professionalism, and affordability.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
