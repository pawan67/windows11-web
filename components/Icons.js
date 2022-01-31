import React from "react";

function Icons({ src, customClickEvent }) {
  return (
    <div onClick={customClickEvent}>
      <img
        className="  hover:saturate-200  hover:scale-95 rounded-sm mx-1  h-7"
        src={src}
      />
    </div>
  );
}

export default Icons;
