"use client";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import SourceTextbox from "@/components/SourceTextbox";
import TargetTextbox from "@/components/TargetTextbox";

export default function Home() {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [sourceLang, setSourceLang] = useState("ko");
  const [targetLang, setTargetLang] = useState("en");
  const [isLoading, setIsLoading] = useState(false);

  const toggleLanguages = () => {
    const newSourceLang = targetLang;
    const newTargetLang = sourceLang;
    setSourceLang(newSourceLang);
    setTargetLang(newTargetLang);
    fetchTranslation(sourceText, newSourceLang, newTargetLang);
  };

  const fetchTranslation = async (text, sourceLang, targetLang) => {
    setIsLoading(true);
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/translate/?sl=${sourceLang}&tl=${targetLang}&text=${text}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      const data = await response.json();
      setTargetText(data?.translated || "");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="flex justify-center items-center gap-10">
        <SourceTextbox
          sourceText={sourceText}
          setSourceText={setSourceText}
          sourceLang={sourceLang}
          targetLang={targetLang}
          setTargetText={setTargetText}
          setIsLoading={setIsLoading}
        />
        <AiOutlineArrowRight />
        <TargetTextbox
          isLoading={isLoading}
          targetText={targetText}
          targetLang={targetLang}
        />
      </div>
    </div>
  );
}
