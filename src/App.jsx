import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import AlbumView from "./pages/AlbumView";
import PostView from "./pages/PostView";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResetDb from "./pages/ResetDb";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albumview" element={<AlbumView />} />
          <Route path="/postview" element={<PostView />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resetdb" element={<ResetDb />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
