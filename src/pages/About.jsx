import Hero from '../components/About/Hero'
import Mission from '../components/About/Mission'
import Vision from '../components/About/Vision'

const About = () => {
  return (
    <>
      {/* ✔️ */}
      <div className="pt-20 w-full min-h-screen overflow-x-hidden">
        <Hero />
        <Mission />
        <Vision />
      </div>
    </>
  );
};

export default About