import React from "react";
import Card from './components/Cards'
import Category from "./components/Category";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Card/>
      <Food/>
      <Category/>
    </>
  )
}
export default Home