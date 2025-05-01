// import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
// import { Testimonials } from "./components/Testimonials";
// import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Cta } from "./components/Cta";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      {/* <About /> */}
      <HowItWorks />
      {/* <Features /> */}
      <Services />
      {/* <Testimonials /> */}
      <Team />
      <Cta />
      {/* <Pricing />
      <Newsletter />
      <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
