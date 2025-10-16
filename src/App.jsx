import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import AlbumView from "./pages/AlbumView";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AlbumView" element={<AlbumView />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
