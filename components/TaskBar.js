import React from "react";
import Icons from "./Icons";
//BsFillVolumeUpFill
import { BsVolumeUp } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { useState } from "react";
import { useUserContext } from "../userContext";
import StartMenu from "./StartMenu";
import TaskManager from "./TaskManager";
function TaskBar() {
  const [taskM, setTaskM] = useState(false);
  const { menu, setMenu } = useUserContext();
  const { app, setApp } = useUserContext();
  const { fileApp, setFileApp } = useUserContext();
  const { terminalApp, setTerminalApp } = useUserContext();
  const { vscodeApp, setVscodeApp } = useUserContext();
  const { braveApp, setBraveApp } = useUserContext();
  const { spotifyApp, setSpotifyApp } = useUserContext();

  const d = new Date();

  let minutes = d.getMinutes();
  let hour = d.getHours();
  let day = d.getDay();
  let month = d.getMonth();
  let date = d.getDate();
  let year = d.getFullYear();
  return (
    <div className="border-b  dark:text-gray-900 dark:bg-[#f3f3f3] absolute border-black  w-screen flex py-2 justify-center space-x-2 bg-[#242424]/90 backdrop-blur-sm  bottom-0">
      <Icons
        customClickEvent={() => (menu ? setMenu(false) : setMenu(true))}
        src="images/start.png"
      />
      <Icons
        customClickEvent={() => (menu ? setMenu(false) : setMenu(true))}
        src="images/search.png"
      />
      <Icons
        customClickEvent={() => {
          fileApp ? setFileApp(false) : setFileApp(true);
        }}
        src="images/file.png"
      />
      <Icons
        customClickEvent={() => {
          terminalApp ? setTerminalApp(false) : setTerminalApp(true);
        }}
        src="images/terminal1.png"
      />
      <Icons
        customClickEvent={() => {
          vscodeApp ? setVscodeApp(false) : setVscodeApp(true);
        }}
        src="images/vscode1.png"
      />

      <Icons
        customClickEvent={() => {
          braveApp ? setBraveApp(false) : setBraveApp(true);
        }}
        src="images/braveBrowser.png"
      />

      <Icons
        customClickEvent={() => {
          spotifyApp ? setSpotifyApp(false) : setSpotifyApp(true);
        }}
        src="images/spotify.png"
      />
      <div className=" flex absolute right-4">
        <div
          onClick={() => (taskM ? setTaskM(false) : setTaskM(true))}
          className="dark:hover:bg-white hover:bg-[#2d2d2d] rounded-md px-2 flex items-center space-x-3 "
        >
          <MdOutlineKeyboardArrowUp />
          <BsVolumeUp />
          <AiOutlineWifi />
        </div>
        <div className=" dark:hover:bg-white hover:bg-[#2d2d2d] px-2 rounded-md   text-right text-[12px]">
          <p>
            {hour}:{minutes < 10 ? "0" : ""}
            {minutes}
          </p>
          <p>
            {date}/{month < 10 ? "0" : ""}
            {month + 1}/{year}
          </p>
        </div>
      </div>
      <div
        className={`fixed  ${
          menu ? "bottom-14" : "-bottom-[1000px]"
        }    transition-all z-50`}
      >
        <StartMenu />
      </div>
      <div
        className={`fixed    ${
          taskM ? "bottom-14 right-2 transition-all" : "-right-[1000px]  "
        }      z-50`}
      >
        <TaskManager />
      </div>
    </div>
  );
}

export default TaskBar;
