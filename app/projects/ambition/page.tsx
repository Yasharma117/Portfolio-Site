import Hero from "./sections/Hero"
import Video from "./sections/Video"
import Intro from "./sections/Intro"
import PainPoints from "./sections/PainPoints";
import Empathy from "./sections/Empathy"
import Philosophy from "./sections/Philosophy";
import HiFiSection from "./sections/HiFiSection";
import LearningSection from "./sections/LearningSection";
import Footer from "./sections/Footer";


export default function AmbitionPage() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Video />
      <Intro />
      <PainPoints />
      <Empathy/>
      <Philosophy/>
      <HiFiSection/>
      <LearningSection />
      <Footer />
    </main>
  )
}
