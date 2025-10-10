import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Places from "./pages/Places";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
