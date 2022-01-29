import React from "react";

function DeskIcons({ src, title, customClickEvent, clickEvent }) {
  return (
    <div
      onDoubleClick={customClickEvent}
      onClick={clickEvent}
      className=" dark:text-black dark:hover:bg-white min-h-[80px]  min-w-[80px] cursor-pointer  hover:bg-white/[.2] p-1 rounded-md flex justify-between flex-col items-center"
    >
      <img className=" rounded-md w-10" src={src} alt="" />
      <p className=" text-sm mt-1 ">{title}</p>
    </div>
  );
}

export default DeskIcons;
