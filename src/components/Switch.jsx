import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Switch = ({ handleSourceLangChange }) => {
  return (
    <div className="">
      <HiOutlineSwitchHorizontal
        className="text-2xl hover:opacity-50 hover:cursor-pointer"
        onClick={handleSourceLangChange}
      />
    </div>
  );
};

export default Switch;
