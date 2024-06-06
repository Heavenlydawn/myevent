import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Feature from "../Hero/Feature";
import ContactUsHero from "../Hero/Contact/ContactUsHero";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <ContactUsHero />
      <Footer />
    </div>
  );
};

export default Home;
