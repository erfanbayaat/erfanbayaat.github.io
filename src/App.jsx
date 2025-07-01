import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Invesment from "./components/invesment";
import Instruction from "./components/Instruction";
import Categories from "./components/Categories";
import PopularCompanies from "./components/PopularCompany";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Invesment />
      <Instruction />
      <Categories />
      <PopularCompanies />
    </>
  );
}

export default App;
