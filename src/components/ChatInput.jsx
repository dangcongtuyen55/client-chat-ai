import React, { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <>
      <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative">
        {loading ? (
          <img src="./loading.gif" className="w-10 m-auto" alt="" />
        ) : (
          <>
            <textarea
              onKeyDown={(e) => {
                e.keyCode === 13 && e.shiftKey === false && handleSubmit();
              }}
              rows={1}
              value={value}
              type="text"
              onChange={(e) => setValue(e.target.value)}
              className="border-0 bg-transparent outline-none w-11/12 px-2"
            />
            <button onClick={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ChatInput;
