'use client'
import Footer from "@/components/Footer";
import About from "@/components/hero/about";
import Hero from "@/components/hero/Hero";
import Team from "@/components/hero/team";
import Timeline from "@/components/hero/timeline";
import Trailer from "@/components/hero/trailer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-[#15171c] justify-center items-center overscroll-y-none">
      <Navbar />
      <Hero />
      <About />
      <Trailer />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
}
