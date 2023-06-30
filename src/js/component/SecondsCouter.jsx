import React from "react";
const SecondsCounter = ({ seconds }) => {
  const lengthseconds = seconds.toString().length;

  let posi1 = lengthseconds >= 1 ? seconds.toString() : "0";
  let posi2 = lengthseconds >= 2 ? seconds.toString() : "0";
  let posi3 = lengthseconds >= 3 ? seconds.toString() : "0";
  let posi4 = lengthseconds >= 4 ? seconds.toString() : "0";
  let posi5 = lengthseconds >= 5 ? seconds.toString() : "0";
  let posi6 = lengthseconds >= 6 ? seconds.toString() : "0";
  const styleList = {
    backgroundColor: "#0e0e0e",
  };
  return (
    <div className="d-flex justify-content-center container bg-black text-white fs-1 mt-4 ">
      <div className="py-2 px-2 mx-1 my-2">
        <i className="far fa-clock"></i>
      </div>

      <div className="py-2 px-2 mx-1 my-2" style={styleList}>
        {posi6[lengthseconds - 6] || "0"}
      </div>
      <div className="py-2 px-2 mx-1 my-2" style={styleList}>
        {posi5[lengthseconds - 5] || "0"}
      </div>
      <div className="py-2 px-2 mx-1 my-2" style={styleList}>
        {posi4[lengthseconds - 4] || "0"}
      </div>
      <div className="py-2 px-2 mx-1 my-2" style={styleList}>
        {posi3[lengthseconds - 3] || "0"}
      </div>
      <div className="py-2 px-2 mx-1 my-2" style={styleList}>
        {posi2[lengthseconds - 2] || "0"}
      </div>
      <div className="py-2 px-2 mx-1 my-2" style={styleList}>
        {posi1[lengthseconds - 1]}
      </div>
    </div>
  );
};
export default SecondsCounter;
