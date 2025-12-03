import Features from "../components/About/Features"
import FAQSection from '../components/Home/FAQSection'
import CTA from '../components/About/CTA'
import Testimonials from '../components/About/Testimonials'
import Team from '../components/About/Team'
import Hero from '../components/About/Hero'
import Vision from '../components/About/Vision'

const About = () => {
  return (
    <>
      <div className="pt-20 w-full min-h-screen overflow-x-hidden">
        <Hero /> {/* ✔️ */}
        <Vision /> {/* ✔️ */}
        <Features/> {/* ✔️ */}
        <Team/> {/* ✔️ */}
        <Testimonials/> {/* ✔️ */}
        <FAQSection/> {/* ✔️ */}
        <CTA/>
      </div>
    </>
  );
};

export default About