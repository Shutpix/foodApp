import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>{
    return (
        <a href="/">
        <img 
        className="logo"
        alt="logo"
        src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
        </a>
    );
}

const Header = ()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>



                </ul>

            </div>

        </div>
    );

};

const Body = () =>{
    return (
         <h4>Body</h4>    
    );
}

const Footer = () =>{
    return (
        <h4>Footer</h4>
    );

}

const AppLAyout = () =>{
    return (
        <>
        <Header/>
        <Body />
        <Footer />
        </>

    );
}




const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLAyout />);