import React, { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const append = (val) => {
    setValue((prev) => prev + val);
  };

  const calculate = () => {
    try {
      setValue(String(eval(value)));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-xs sm:max-w-sm bg-black rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <input
          type="text"
          readOnly
          value={value || "0"}
          className="
            w-full h-24 mb-5 px-4
            text-right text-4xl sm:text-5xl
            bg-black text-white
            rounded-2xl outline-none
            truncate
          "
        />

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => setValue("")}
            className="col-span-2 h-14 rounded-full bg-slate-500 text-black text-lg
                       hover:bg-slate-400 active:scale-95 transition cursor-pointer"
          >
            AC
          </button>

          <button
            onClick={() => setValue(value.slice(0, -1))}
            className="h-14 rounded-full bg-slate-500 text-black text-lg
                       hover:bg-slate-400 active:scale-95 transition cursor-pointer"
          >
            ⌫
          </button>

          <button
            onClick={() => append("/")}
            className="h-14 rounded-full bg-orange-500 text-white text-xl
                       hover:bg-orange-400 active:scale-95 transition cursor-pointer"
          >
            ÷
          </button>

          {["7", "8", "9"].map((n) => (
            <button
              key={n}
              onClick={() => append(n)}
              className="h-14 rounded-full bg-slate-700 text-white text-xl
                         hover:bg-slate-600 active:scale-95 transition cursor-pointer"
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => append("*")}
            className="h-14 rounded-full bg-orange-500 text-white text-xl
                       hover:bg-orange-400 active:scale-95 transition cursor-pointer"
          >
            ×
          </button>

          {["4", "5", "6"].map((n) => (
            <button
              key={n}
              onClick={() => append(n)}
              className="h-14 rounded-full bg-slate-700 text-white text-xl
                         hover:bg-slate-600 active:scale-95 transition cursor-pointer"
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => append("-")}
            className="h-14 rounded-full bg-orange-500 text-white text-xl
                       hover:bg-orange-400 active:scale-95 transition cursor-pointer"
          >
            −
          </button>

          {["1", "2", "3"].map((n) => (
            <button
              key={n}
              onClick={() => append(n)}
              className="h-14 rounded-full bg-slate-700 text-white text-xl
                         hover:bg-slate-600 active:scale-95 transition cursor-pointer"
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => append("+")}
            className="h-14 rounded-full bg-orange-500 text-white text-xl
                       hover:bg-orange-400 active:scale-95 transition cursor-pointer"
          >
            +
          </button>

          <button
            onClick={() => append("0")}
            className="col-span-2 h-14 rounded-full bg-slate-700 text-white text-xl
                       hover:bg-slate-600 active:scale-95 transition cursor-pointer"
          >
            0
          </button>

          <button
            onClick={calculate}
            className="col-span-2 h-14 rounded-full bg-emerald-500 text-white text-xl
                       hover:bg-emerald-400 active:scale-95 transition cursor-pointer"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
