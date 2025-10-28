import AssistSection from "./sections/Assist";
import Awareness from "./sections/Awareness";
import Control from "./sections/Control";
import DesignBrief from "./sections/DesignBrief";
import DesignProcess from "./sections/DesignProcess";
import Efficiency from "./sections/Efficiency";
import FlowSection from "./sections/FlowSection";
import HeroSection from "./sections/Hero";
import Inspiration from "./sections/Inspiration";
import OnboardingAssistant from "./sections/OnboardingAssistant";
import FullImageSection from "./sections/FullImage";
import RecipeDetails from "./sections/RecipeDetails";
import Footer from "../ambition/sections/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <DesignBrief />
      <AssistSection />
      <OnboardingAssistant />
      <DesignProcess />
      <Awareness />
      <Control />
      <Inspiration />
      <Efficiency />
      <FlowSection />
      <FullImageSection />
      <RecipeDetails />
      <Footer />
    </main>
  );
}
