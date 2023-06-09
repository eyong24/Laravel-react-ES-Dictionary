import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Content_dictionary } from "./Main2_components";
import { Search } from "./Search";

export default function Main() {
        
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMain, setShowMain] = useState(false);


  function handleClick(){
    setShowSidebar(!showSidebar);
    setShowMain(!showMain);
  }

  return (
    <>
    <Sidebar showSidebar={showSidebar}/>
    <main className={showMain?"main-container collapse":"main-container"}>
    <div className="fixed-container">
      <Navbar click={handleClick}/>
      <Search />
     </div> 
      <Content_dictionary/>
    </main>
    </>
  );
}
