import {
  Navbar,
  Hero,
  Featured,
  About,
  Book,
  Author,
  Reviews,
  Contact,
} from "./components";
import NavbarContext from "./context/NavbarContext";

function App() {
  return (
    <>
      <NavbarContext>
        <Navbar />
        <Hero />
        <Featured />
        <About />
        <Book />
        <Author />
        <Reviews />
        <Contact />
      </NavbarContext>
    </>
  );
}

export default App;
