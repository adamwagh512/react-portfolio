import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import FooterDiv from "./components/FooterDiv";
import HeaderDiv from "./components/HeaderDiv";

export default function App() {
  return (
    <div>
      <header>
        <HeaderDiv />
      </header>
      <div>
      <PortfolioContainer />
      </div>
    <footer>
      <FooterDiv />
    </footer>
    </div>
  );
}


