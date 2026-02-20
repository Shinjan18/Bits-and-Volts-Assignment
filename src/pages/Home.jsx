import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";


function Home(){
  return (
    <>
      <Navbar />
      <Hero/>
      <LogoStrip/>
      <Services/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default Home;