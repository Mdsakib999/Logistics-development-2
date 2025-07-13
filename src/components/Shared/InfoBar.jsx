import { FaLocationDot, FaPhone } from "react-icons/fa6";

const InfoBar = () => {
  return (
    <div className="bg-blue-200 flex items-center justify-between p-5">
      <div className="flex items-center gap-x-2">
        <FaLocationDot />
        <p>Nasirabad properties ltd, Chattogram</p>
      </div>
      <div className="flex items-center gap-x-2">
        <FaPhone />
        <p>+1 800-123-4567</p>
      </div>
    </div>
  );
};

export default InfoBar;
