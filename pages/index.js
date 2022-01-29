import Head from "next/head";
import Image from "next/image";
import Desktop from "../components/Desktop";
import Login from "../components/Login";
import styles from "../styles/Home.module.css";
import { useUserContext } from "../userContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const [splash, setSplash] = useState(true);
  setTimeout(() => {
    setSplash(false);
  }, 1500);
  if (!splash) {
    console.log("yesojdhsad");
  }
  const { log, setLog } = useUserContext();
  return (
    <>
      <Head>
        <title>Windows 11</title>
        <link rel="icon" href="images/win11logo.png"></link>
      </Head>

      {splash ? (
        <SplashScreen />
      ) : (
        <div className=" overflow-hidden bg-black">
          {log ? <Login /> : <Desktop />}
        </div>
      )}
    </>
  );
}
