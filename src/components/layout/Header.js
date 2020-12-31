import React from "react";


const headerStyle = {
    backgroundColor: "#678c89",
    color: "#fff",
    padding: "10px 15px"
   };

function Header() {
    return (
        <header style = {headerStyle}>
            <h1 style={{ fontSize: "25px", lineHeight: "1.447em", margin: "0px" }}>Simple TODO App</h1>
        </header>
    );
}

export default Header;