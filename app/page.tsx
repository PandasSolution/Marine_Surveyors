"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

import Contact from "../components/Contact";
import Footer from "../components/Footer";

import WhyChooseUs from "@/components/WhyChooseUs";

import ServicePage from "./services/ServicePage";
import LocationSection from "@/components/Location";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
   
   <Navbar />
   

<Hero />
<About />

<ServicePage></ServicePage>
<WhyChooseUs />
{/* <Stats /> */}

<Contact />


<Footer />
    </main>
  );
}
