import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import {
  MdDarkMode,
  MdAccessibilityNew,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BiBluetooth } from "react-icons/bi";
import { FiCast } from "react-icons/fi";
import { BsVolumeUp } from "react-icons/bs";

import { useUserContext } from "../userContext";
function TaskManager() {
  const { bg, setBg } = useUserContext();
  const [isDarkMode, setIsDarkMode] = useState(false);
  function setDarkMode() {
    var root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }
  return (
    <div className="  text-white dark:text-gray-900 dark:bg-[#f3f3f3] w-[400px] h-[350px] border p-7 bg-[#242424]/90 rounded-md border-gray-700 dark:border-gray-300 shadow-md backdrop-blur-sm ">
      <div className="grid grid-cols-3  gap-4">
        <div className=" flex flex-col items-center justify-center">
          <div
            onClick={() => {
              bg ? setBg(false) : setBg(true);
              setDarkMode();
            }}
            className={` hover:scale-95 flex justify-center h-14 items-center w-24 ${
              bg ? "bg-blue-400" : "bg-[#363636]"
            }  rounded-md  dark:bg-[#fff] dark:border-gray-300  border border-gray-600`}
          >
            <MdDarkMode />
          </div>
          <p className=" text-sm mt-2">Dark Mode</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className=" hover:scale-95 flex justify-center h-14 items-center w-24 bg-[#363636] rounded-md  border border-gray-600 dark:bg-[#fff] dark:border-gray-300 ">
            <MdAccessibilityNew />
          </div>
          <p className=" text-sm mt-2">Accessibility</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className=" hover:scale-95 flex justify-center h-14 items-center w-24 bg-[#363636] rounded-md  border border-gray-600 dark:bg-[#fff] dark:border-gray-300 ">
            <BiBluetooth />
          </div>
          <p className=" text-sm mt-2">Bluetooth</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className=" hover:scale-95 flex justify-center h-14 items-center w-24 bg-[#363636] rounded-md  border border-gray-600 dark:bg-[#fff] dark:border-gray-300 ">
            <FiCast />
          </div>
          <p className=" text-sm mt-2">Cast</p>
        </div>
      </div>
      <div className=" flex space-x-4 text-xl mt-20">
        <BsVolumeUp />
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
}

export default TaskManager;
