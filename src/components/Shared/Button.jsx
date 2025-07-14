const Button = ({ buttonText }) => {
  return (
    <div className="cursor-pointer bg-[#0778D4] text-white border-2 border-transparent hover:text-[#0778D4] hover:bg-white hover:border-[#0778D4] transition-all duration-300 px-8 py-2 rounded-full text-lg font-serif">
      {buttonText}
    </div>
  );
};

export default Button;
