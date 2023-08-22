const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="h-[3rem] flex justify-center items-center border-gray-200 border-t bg-white">
        <h1 className="">
          © {new Date().getFullYear()} AI Translator. All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
