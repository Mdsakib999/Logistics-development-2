import { Outlet } from "react-router";
import Footer from "./components/Footer";
import InfoBar from "./components/InfoBar";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto font-inter">
      <InfoBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
