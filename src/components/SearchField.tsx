import { useState } from "react";
import { useNavigate } from "react-router";

export function SearchField() {
  const [text, setText] = useState("");
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-1 justify-end items-center">
      <label className="flex flex-col min-w-40 !h-10 max-w-64">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
          <div className="text-gray-400 dark:text-[#92c0c9] flex border-none bg-black/5 dark:bg-[#234248] items-center justify-center pl-4 rounded-l-lg border-r-0">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-black/5 dark:bg-[#234248] focus:border-none h-full placeholder:text-gray-400 dark:placeholder:text-[#92c0c9] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                navigate(`/details/${text}`)
                setText('')
              }
            }}
          />
        </div>
      </label>
    </div>
  );
}
