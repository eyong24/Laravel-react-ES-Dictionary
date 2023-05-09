import React from "react";
import ReactDOM from "react-dom/client"
import Start from "./start";

const Page = (
    <div>
        <Start/>
    </div>
)
export default Page; 


if (document.getElementById('root')){
    const dom = ReactDOM.createRoot(document.getElementById('root'))
    dom.render (Page)
}