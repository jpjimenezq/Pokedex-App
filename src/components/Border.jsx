import React from "react";

function Border() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50" />
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50" />
    </>
  );
}

export default Border;
