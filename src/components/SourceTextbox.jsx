"use client";
import { useState } from "react";

const TextObj = {
  en: "English",
  ko: "Korean",
};

const SourceTextbox = ({
  sourceText,
  setSourceText,
  sourceLang,
  targetLang,
  setTargetText,
  setIsLoading,
}) => {
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSourceChange = (e) => {
    const newValue = e.target.value;
    setSourceText(newValue);

    clearTimeout(typingTimeout);

    const newTypingTimeout = setTimeout(() => {
      fetchTranslation(newValue);
    }, 500);

    setTypingTimeout(newTypingTimeout);
  };

  const fetchTranslation = async (text) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/translate/?sl=${sourceLang}&tl=${targetLang}&text=${text}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      const data = await response.json();
      setTargetText(data?.translated || "");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-gray-200 border w-[400px] h-[300px] rounded-md bg-white focus:border-blue-300 hover:border-blue-300">
      <div className="h-12 border-b flex  items-center justify-center pointer-events-none">
        <pre className="">{TextObj[sourceLang]}</pre>
      </div>
      <div className="p-4 h-full">
        <textarea
          onChange={handleSourceChange}
          placeholder="Write something here..."
          className="outline-none resize-none w-full h-[80%] placeholder-zinc-400 placeholder-text-sm "
          defaultValue={sourceText}
        />
      </div>
    </div>
  );
};

export default SourceTextbox;
