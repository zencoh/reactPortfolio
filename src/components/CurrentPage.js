import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";
import Dom from "./Dom";

function CurrentPage({ currentPage }) {
  console.log(currentPage.name);
  const renderToDom = () => {
    if (currentPage.name === "About") {
      return <About />;
    }
    if (currentPage.name === "Project") {
      return <Project />;
    }
    if (currentPage.name === "Resume") {
      return <Resume />;
    }
    if (currentPage.name === "Contact") {
      return <Contact />;
    }
  };
  return (
    <section>
      <h1>{currentPage.name}</h1>
      <Dom>{renderToDom()}</Dom>
    </section>
  );
}

export default CurrentPage;
