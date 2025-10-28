import Image from "next/image";
import Hero from "./components/Hero";
import CuratedWork from "./components/CuratedWork";
import AboutMe from "./components/AboutMe";
import Drawings from "./components/Drawings";
import Footer from "./components/Footer";
import CuratedWorkScroller from "./components/CuratedWorkScroller";

export default function Home() {
  return (
    <>
      <Hero />
      <CuratedWorkScroller />
      <AboutMe/>
      <Drawings/>
      <Footer/>
      {/* …other sections */}
    </>
  );
}
