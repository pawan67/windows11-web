import React, { useEffect, useState } from "react";
import { useUserContext } from "../userContext";
import Frame from "./Frame";
import TaskBar from "./TaskBar";
import { useRef } from "react";
import DeskIcons from "./DeskIcons";

function Desktop() {
  const { log, setLog } = useUserContext();
  //tried to close by clicking outside
  // const { menu, setMenu } = useUserContext();
  const [state, setState] = useState();
  const { fileApp, setFileApp } = useUserContext();
  const { fpv, setFpv } = useUserContext();
  const { vscodeApp, setVscodeApp } = useUserContext();
  const { terminalApp, setTerminalApp } = useUserContext();
  const { braveApp, setBraveApp } = useUserContext();
  const { spotifyApp, setSpotifyApp } = useUserContext();
  const { flappyBird, setFlappyBird } = useUserContext();
  const { photoEd, setPhotoEd } = useUserContext();
  const { musicPlayer, setMusicPlayer } = useUserContext();
  const { slither, setSlither } = useUserContext();
  const startUpSound = useRef(null);
  useEffect(() => {
    if (!log) {
      startUpSound.current.play();
    }
  }, []);
  return (
    <div
      data-aos-duration="1500"
      data-aos="fade"
      className="w-screen overflow-hidden transition  h-screen text-white bg-wallpaper-1 dark:bg-wallpaper-light  duration-1000 bg-cover object-fill"
    >
      <TaskBar />
      {fileApp ? (
        <Frame
          closeCustomEvent={() => setFileApp(false)}
          name="File Manager"
          iframeSrc="https://tinyfilemanager.github.io/demo/"
          customSize={{ width: 800, height: 450 }}
        />
      ) : (
        ""
      )}
      {vscodeApp ? (
        <Frame
          closeCustomEvent={() => setVscodeApp(false)}
          name="Visual Studio Code"
          iframeSrc="https://vscode.dev/"
          customSize={{ width: 900, height: 600 }}
        />
      ) : (
        ""
      )}
      {terminalApp ? (
        <Frame
          closeCustomEvent={() => setTerminalApp(false)}
          name="Terminal"
          iframeSrc="https://git-terminal.js.org/"
          customSize={{ width: 800, height: 450 }}
        />
      ) : (
        ""
      )}
      {braveApp ? (
        <Frame
          closeCustomEvent={() => setBraveApp(false)}
          name="Brave Google search"
          iframeSrc="https://google-clone-p8mn37r8a-cosmicwanderer7.vercel.app/"
          customSize={{ width: 800, height: 450 }}
        />
      ) : (
        ""
      )}
      {spotifyApp ? (
        <Frame
          closeCustomEvent={() => setSpotifyApp(false)}
          name="Spotify"
          iframeSrc="https://spotify-clone-b6901.web.app/"
          customSize={{ width: 800, height: 450 }}
        />
      ) : (
        ""
      )}
      {flappyBird ? (
        <Frame
          closeCustomEvent={() => setFlappyBird(false)}
          name="Flappy Bird"
          iframeSrc="https://playcanv.as/p/2OlkUaxF/"
          customSize={{ width: 400, height: 600 }}
        />
      ) : (
        ""
      )}
      {photoEd ? (
        <Frame
          closeCustomEvent={() => setPhotoEd(false)}
          name="Photo Pea - Adobe photoshop clone"
          iframeSrc="https://www.photopea.com/"
          customSize={{ width: 900, height: 600 }}
        />
      ) : (
        ""
      )}
      {musicPlayer ? (
        <Frame
          closeCustomEvent={() => setMusicPlayer(false)}
          name="Music Player"
          customSize={{ width: 420, height: 830 }}
          iframeSrc="https://musicplayerpawan.netlify.app/"
        />
      ) : (
        ""
      )}
      {slither ? (
        <Frame
          closeCustomEvent={() => setSlither(false)}
          name="Robostorm"
          fullScreen={() => setState({ width: "100vw", height: "100vh" })}
          customSize={{ width: 900, height: 600 }}
          iframeSrc="https://robostorm.io/"
        />
      ) : (
        ""
      )}
      {fpv ? (
        <Frame
          closeCustomEvent={() => setFpv(false)}
          name="After Flood"
          fullScreen={() => setState({ width: "100vw", height: "100vh" })}
          customSize={{ width: 900, height: 600 }}
          iframeSrc="https://playcanv.as/p/44MRmJRU/"
        />
      ) : (
        ""
      )}
      <div className=" flex-wrap -z-10 space-y-5 absolute top-5 left-5">
        <DeskIcons
          
          customClickEvent={() => setFpv(true)}
          src="images/fpv.jpg"
          title="After Flood"
        />
        <DeskIcons
          customClickEvent={() => setBraveApp(true)}
          src="images/braveBrowser.png"
          title="Brave"
        />
        <DeskIcons
          customClickEvent={() => setVscodeApp(true)}
          src="images/vscode1.png"
          title="Vs code"
        />
        <DeskIcons
          customClickEvent={() => setFlappyBird(true)}
          src="images/flappybird.png"
          title="Flappy Bird"
        />
        <DeskIcons
          customClickEvent={() => setPhotoEd(true)}
          src="images/photopea.png"
          title="Photo Editor"
        />
        <DeskIcons
          customClickEvent={() => setSlither(true)}
          src="images/robostorm.jpg"
          title="Robostorm"
        />
        <DeskIcons
          customClickEvent={() => setTerminalApp(true)}
          src="images/terminal1.png"
          title="Terminal"
        />
        <DeskIcons
          customClickEvent={() => setMusicPlayer(true)}
          src="images/music-note.png"
          title="Music Player"
        />
      </div>
      <audio ref={startUpSound} src="sounds/startup.mp3"></audio>
    </div>
  );
}

export default Desktop;
