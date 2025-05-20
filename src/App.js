
import Header from "./components/Header"
import './App.css';
import Slider from "./components/Slider"
import Message from "./components/Message";
import Footer from "./components/Footer";
import { data } from "./utils/Context";
import { useState } from "react";
import Skn_nav from "./components/Skn_nav";


const abc="bharat"
function App() {
  return (
    <div className="App">
      <data.Provider value={abc}>
      <Header/>
      <Slider/>
      <Message></Message>
      <Skn_nav/>
      <Footer/>
      </data.Provider> 
    </div>
  );
}

export default App;
