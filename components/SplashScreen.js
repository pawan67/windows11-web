import React from "react";

function SplashScreen() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-black ">
      <div>
        <div className="pt-32 pb-64">
          <img
            className="  rounded-md w-40"
            src="images/win11logo.png"
            alt=""
          />
        </div>
        <img
          className="w-8  motion-safe:animate-spin mx-auto"
          src="images/loading.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SplashScreen;
