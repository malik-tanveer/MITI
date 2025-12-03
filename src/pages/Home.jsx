import react from "react";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import TeamSection from "../components/Home/TeamSection";
import HowItWorks from "../components/Home/HowItWorks";
import DifferenceSection from "../components/Home/DifferenceSection";
import FAQSection from "../components/Home/FAQSection";
import SecuritySection from "../components/Home/SecuritySection";
import CTASection from "../components/Home/CTASection";

const Home = () => {
  return (
    <>
    <div className="pt-20 w-full min-h-screen overflow-x-hidden">
      <HeroSection /> {/* ✔️ */}
      <FeaturesSection /> {/* ✔️ */}
      <TeamSection /> {/* ✔️ */}
      <HowItWorks /> {/* ✔️ */}
      <DifferenceSection /> {/* ✔️ */}
      <FAQSection /> {/* ✔️ */}
      <SecuritySection /> {/* ✔️ */}
      <CTASection /> {/* ✔️ */}
    </div>
  </>
  );
};

export default Home;
