import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [log, setLog] = useState(true);
  const [menu, setMenu] = useState(false);
  const [bg, setBg] = useState(true);
  const [fpv, setFpv] = useState(false);

  const [app, setApp] = useState("");
  const [fullscreen, setFullscreen] = useState(false);
  const [fileApp, setFileApp] = useState(false);
  const [vscodeApp, setVscodeApp] = useState(false);
  const [terminalApp, setTerminalApp] = useState(false);
  const [braveApp, setBraveApp] = useState(false);
  const [spotifyApp, setSpotifyApp] = useState(false);
  const [flappyBird, setFlappyBird] = useState(false);
  const [photoEd, setPhotoEd] = useState(false);
  const [musicPlayer, setMusicPlayer] = useState(false);
  const [slither, setSlither] = useState(false);

  const contextValue = {
    log,
    vscodeApp,
    app,
    fileApp,
    setFileApp,
    setApp,
    setLog,
    setVscodeApp,
    terminalApp,
    setTerminalApp,
    braveApp,
    setBraveApp,
    spotifyApp,
    setSpotifyApp,
    flappyBird,
    setFlappyBird,
    photoEd,
    setPhotoEd,
    musicPlayer,
    setMusicPlayer,
    slither,
    setSlither,
    fullscreen,
    setFullscreen,
    menu,
    setMenu,
    bg,
    setBg,
    fpv,
    setFpv,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
