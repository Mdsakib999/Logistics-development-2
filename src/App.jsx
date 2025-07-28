import { Outlet } from "react-router";
import InfoBar from "./components/Shared/InfoBar";
import Footer from "./components/Shared/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import Navbar from "./components/Shared/Navbar";

const App = () => {
  return (
    <div className="font-inter">
      <InfoBar />
      <Navbar />

      <ScrollToTop />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
