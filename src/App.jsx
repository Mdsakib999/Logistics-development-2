import { Outlet } from "react-router";
import InfoBar from "./components/Shared/InfoBar";
import Footer from "./components/Shared/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopButton";

const App = () => {
  return (
    <div className="font-inter">
      <InfoBar />
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
