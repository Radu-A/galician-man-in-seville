import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Album from "./pages/Album";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./legal/TermsAndConditions";
import PrivacyPolicy from "./legal/PrivacyPolicy";
import CookiePolicy from "./legal/CookiePolicy";
import ResetDb from "./pages/ResetDb";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* pages */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/album" element={<Album />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* legal */}
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          {/* reset */}
          <Route path="/resetdb" element={<ResetDb />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
