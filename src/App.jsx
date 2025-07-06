import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Invesment from "./components/invesment";
import Instruction from "./components/Instruction";
import Categories from "./components/Categories";
import PopularCompanies from "./components/PopularCompany";
import Jobs from "./components/Jobs"
import News from "./components/News";
import Event from "./components/Event";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Invesment />
      <Instruction />
      <Categories />
      <PopularCompanies />
      <Jobs/>
      <News/>
      <Event/>
    </>
  );
}

export default App;
