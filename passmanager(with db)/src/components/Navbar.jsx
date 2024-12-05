import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white">
      <div className="mycontainer  h-14 justify-between items-center flex py-5 px-4 ">
        <div className="logo font-bold  text-2xl  ">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        
        <button className="inline-flex gap-2 text-white rounded-lg bg-purple-400 px-3">
          <lord-icon 
            src="https://cdn.lordicon.com/yvjimpju.json"
            trigger="hover"
          ></lord-icon>Github
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
