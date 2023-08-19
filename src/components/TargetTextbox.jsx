"use client";

const TargetTextbox = () => {
  return (
    <div className="border-gray-200 border w-[300px] h-[200px] rounded-md">
      <pre className="border-b px-3 py-1 bg-slate-200">Korean</pre>
      <div className="p-4 h-full">
        <textarea
          placeholder="Translation will appear here..."
          className="outline-none resize-none w-full h-[80%]"></textarea>
      </div>
    </div>
  );
};

export default TargetTextbox;
