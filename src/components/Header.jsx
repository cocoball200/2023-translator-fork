import Image from "next/image";
const Header = () => {
  return (
    <header className="">
      <div className="h-[4rem] flex items-center bg-white gap-5 px-5">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          layout="fixed"
          alt="Picture of the author"
        />
        <h1 className=" font-bold">AI TRANSLATOR</h1>
      </div>
    </header>
  );
};

export default Header;
