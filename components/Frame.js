import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
//IoCloseOutline VscChromeMaximize BsDash
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { VscChromeMaximize } from "react-icons/vsc";
import { BsDash } from "react-icons/bs";
import { useUserContext } from "../userContext";
import { motion } from "framer-motion";

function Frame({ iframeSrc, name, closeCustomEvent, customSize, fullScreen }) {
  const { app, setApp } = useUserContext();
  const { fullscreen, setFullscreen } = useUserContext();
  
  const [state, setState] = useState(customSize);
  return (
    <Draggable >
      <Resizable
        style={{ marginLeft: 0, marginTop: 0 }}
        size={{ width: state.width, height: state.height }}
        onResizeStop={(e, direction, ref, d) => {
          setState({
            width: state.width + d.width,
            height: state.height + d.height,
          });
        }}
      >
        <div 
          data-aos="zoom-in"
          className=" w-full h-full z-50 shadow-2xl border  rounded-md overflow-hidden border-gray-600   absolute "
        >
          <div className=" justify-between  flex items-center w-full h-8 bg-[#000] rounded-t-md ">
            <div className=" text-sm ml-3 ">{name}</div>
            <div className=" h-full flex items-center ">
              <BsDash className=" p-1 h-full w-8 px-2 hover:bg-[#444444]" />
              <VscChromeMaximize
                onClick={() => setState({width: '100vw', height: '100vh'})}
                className=" px-2 p-1 h-full w-8  hover:bg-[#444444]"
              />
              <IoCloseOutline
                onClick={closeCustomEvent}
                className=" h-full w-10 p-1 rounded-tr-md hover:bg-[#d10f21]"
              />
            </div>
          </div>
          <iframe
            className="bg-white w-full h-[95%]  rounded-b-md "
            src={iframeSrc}
            title="vscode"
          ></iframe>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Frame;
