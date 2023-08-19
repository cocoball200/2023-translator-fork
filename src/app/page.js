import React from "react";
import SourceTextbox from "@/components/SourceTextbox";
import TargetTextbox from "@/components/TargetTextbox";
import Switch from "@/components/Switch";

export default function Home() {
  return (
    <div className="">
      <div className=" py-14">
        <div className="flex justify-center items-center gap-10">
          <SourceTextbox />
          <Switch />
          <TargetTextbox />
        </div>
      </div>
    </div>
  );
}
