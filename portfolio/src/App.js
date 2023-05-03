import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CurrentPage from "./components/CurrentPage";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "About",
    },
    {
      name: "Project",
    },
    {
      name: "Resume",
    },
    {
      name: "Contact",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="portfolio-app">
      <Header />
      <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Navigation>
      <main>
        <CurrentPage currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
