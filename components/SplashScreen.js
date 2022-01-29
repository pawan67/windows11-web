import React from "react";

function SplashScreen() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-black ">
      <div>
        <img className=" pt-32 pb-64 w-40" src="images/start1.png" alt="" />
        <img className="w-8 motion-safe:animate-spin mx-auto" src="images/loading.png" alt="" />
      </div>
    </div>
  );
}

export default SplashScreen;
