import { Outlet } from "react-router";
import InfoBar from "./components/Shared/InfoBar";
import Footer from "./components/Shared/Footer";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto font-inter">
      <InfoBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
