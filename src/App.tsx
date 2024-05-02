import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Fun from "./pages/Fun";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import { Container } from "./pages/styles/Home.style";
import Footer from "./components/Footer";

// SAVE THE HAWAIIAN LANGUAGE <3

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
