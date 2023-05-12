import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

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
      <Navbar click={handleClick}/>
      <div className="content_dictionary">
        <div className="recent-search">
          <h2>Recent Search</h2>
          <ul className="search-list">
            <li>
              <a href="#0">APPLE</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
          </ul>
        </div>
        <div className="dictionary">
          <div className="upper">
            <img className="img-apple" alt="apple_icon" />
            <div className="desc">
              <h1>Apple</h1>
              <p>Phonetics: $pple</p>
            </div>
          </div>
          <div className="lower">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam animi minima cum corporis obcaecati atque voluptatibus
              fuga, consequuntur, veritatis consequatur expedita rem ab nam?
              Rerum aut ut quos eos? Consequuntur?
            </p>
            <div className="audio"></div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
