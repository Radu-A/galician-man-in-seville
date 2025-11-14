import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Album from "./pages/Album";
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
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
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
