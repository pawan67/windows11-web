import React from "react";
import DeskIcons from "./DeskIcons";
//AiOutlinePoweroff
import { AiOutlinePoweroff } from "react-icons/ai";
import { useUserContext } from "../userContext";
function StartMenu() {
  const { fileApp, setFileApp } = useUserContext();
  const { vscodeApp, setVscodeApp } = useUserContext();
  const { terminalApp, setTerminalApp } = useUserContext();
  const { braveApp, setBraveApp } = useUserContext();
  const { spotifyApp, setSpotifyApp } = useUserContext();
  const { flappyBird, setFlappyBird } = useUserContext();
  const { photoEd, setPhotoEd } = useUserContext();
  const { musicPlayer, setMusicPlayer } = useUserContext();
  const { slither, setSlither } = useUserContext();
  const { fpv, setFpv } = useUserContext();
  const { log, setLog } = useUserContext();
  console.log(log);
  return (
    <div className="w-[600px]  border h-[650px] bg-[#242424]/90 rounded-md border-gray-700 backdrop-blur-sm dark:bg-[#f3f3f3] dark:border-gray-400 text-white dark:text-gray-800  flex flex-col justify-between -z-30 p-10">
      <div>
        <input
          placeholder="Type Here to search"
          type="text"
          className=" dark:bg-[#ffffff] w-full bg-[#202020] border border-gray-700 dark:border-gray-300 border-b-blue-400 dark:border-b-blue-400 p-2 border-b-4 outline-none rounded-md"
        />
        <div className=" dark:bg-[#ffffff] dark:border-gray-300 bg-[#363636] inline-block px-4 py-1 rounded-md mt-5 text-sm border border-gray-600 hover:bg-[#4d4d4d]">
          Recent Apps
        </div>
        <div className="grid grid-cols-5 mt-5 gap-4 place-items-start">
          <DeskIcons
            clickEvent={() => setBraveApp(true)}
            src="images/braveBrowser.png"
            title="Brave"
          />
          <DeskIcons
            clickEvent={() => setVscodeApp(true)}
            src="images/vscode1.png"
            title="Vs Code"
          />
          
          <DeskIcons
            clickEvent={() => setFlappyBird(true)}
            src="images/flappybird.png"
            title="Flappy Bird"
          />
          <DeskIcons
            clickEvent={() => setFpv(true)}
            src="images/fpv.jpg"
            title="After flood"
          />
          <DeskIcons
            clickEvent={() =>
              (window.location.href = "https://twitter.com/Pawantamada21")
            }
            src="images/twitter.png"
            title="Twitter"
          />
          <DeskIcons
            clickEvent={() =>
              (window.location.href = "https://github.com/pawan67")
            }
            src="images/github.png"
            title="Github"
          />
        </div>
      </div>
      <div className=" bg-[#1c1c1c] h-16 flex px-10 rounded-b-md border-gray-700 dark:bg-[#EEEEEE] border items-center justify-between dark:border-0  w-[598px] -ml-10 -mb-10  ">
        <div
          onClick={() => (window.location.href = "https://pawan67.vercel.app/")}
          className=" flex p-2 rounded-md dark:hover:bg-[#fafafa] hover:bg-[#292929] items-center  "
        >
          <img
            className=" mr-2 w-8 rounded-full h-8 "
            src="images/profile.jpg"
            alt=""
          />
          <p className=" text-sm ">Pawan</p>
        </div>
        <AiOutlinePoweroff
          onClick={() => {
            console.log("clicked lig");
            setLog(true);
          }}
          className="p-2 text-4xl rounded-md dark:hover:bg-[#fafafa] hover:bg-[#292929]"
        />
      </div>
    </div>
  );
}

export default StartMenu;
