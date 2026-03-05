import React, { useState } from "react";
import './App.css';
import { BrowserRouter , Route , Routes , Link } from "react-router-dom";

function Home(){
return(
  <>
  <section className="body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed">
        Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.
      </p>
      <div className="flex justify-center">
        <button className="theme-btn primary">Button</button>
        <button className="ml-4 theme-btn secondary">Button</button>
      </div>
    </div>
  </div>
</section>
</>
)
}

function About(){
return(
<>
<section className="body-font">
<div className="container px-5 py-24 mx-auto">
<h1 className="text-2xl font-medium title-font mb-4 tracking-widest text-center">
OUR TEAM
</h1>
<p className="lg:w-2/3 mx-auto text-center mb-10">
Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
</p>
</div>
</section>
</>
)
}

function Services(){
return(
<>
<section className="body-font">
<div className="container px-5 py-24 mx-auto text-center">
<h1 className="text-3xl font-medium mb-6">Our Services</h1>
<p className="mb-6">Simple services section</p>
</div>
</section>
</>
)
}

export default function App(){

const [theme,setTheme] = useState("light")

return(

<BrowserRouter>

<div className={`app ${theme}`}>

{/* Theme Buttons */}
<div className="theme-switcher">
<button onClick={()=>setTheme("light")}>Light</button>
<button onClick={()=>setTheme("dark")}>Dark</button>
<button onClick={()=>setTheme("danger")}>Danger</button>
</div>

{/* Navbar */}
<nav className="nav">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/services">Services</Link>
</nav>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
</Routes>

</div>

</BrowserRouter>

)
}
