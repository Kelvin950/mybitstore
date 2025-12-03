"use client"
import Hero from "./Hero";
import NavBar from "./NavBar";
import Buy_Sell from "./Buy_Sell";
import HowToBuy from "./HowToBuy";
import FAQ from "./FAQ";

export default function Home(){
    return <>
      <NavBar/>
      <Hero/>
      <Buy_Sell/>
      <HowToBuy/>
      <FAQ/>
    </>
}