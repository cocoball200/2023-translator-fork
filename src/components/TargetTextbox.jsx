"use client";

const TextObj = {
  en: "English",
  ko: "Korean",
};

const TargetTextbox = ({ targetText, targetLang, isLoading }) => {
  return (
    <div className="border-gray-200 border w-[400px] h-[300px] rounded-md bg-white pointer-events-none">
      <div className="h-12 border-b flex  items-center justify-center">
        <pre className="">{TextObj[targetLang]}</pre>
      </div>
      <div className="p-4 h-full">
        <div
          className="outline-none resize-none w-full h-[80%] overflow-scroll"
          readOnly>
          {isLoading ? (
            <p>Translating...</p>
          ) : targetText ? (
            <p>{targetText}</p>
          ) : (
            <p className=" text-zinc-400 text-base">
              Translation will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TargetTextbox;
