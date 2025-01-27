import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWork from "../components/HowItWork";
import LovedShoppers from "../components/LovedShoppers";
import CalculateSavings from "../components/CalculateSavings";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <Hero />
        <Features />
        <HowItWork />
        <LovedShoppers />
        <CalculateSavings />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
