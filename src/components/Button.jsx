const Button = ({ buttonText }) => {
  return (
    <div className="cursor-pointer bg-[#0778D4] text-white hover:text-[#0778D4] hover:bg-white hover:border duration-300 px-8 py-2 rounded-full text-lg">
      {buttonText}
    </div>
  );
};

export default Button;
