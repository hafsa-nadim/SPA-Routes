import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Home(){
return(
<>
<section className="text-gray-600 body-font">
<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
<img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
<div className="text-center lg:w-2/3 w-full">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
<p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.</p>
<div className="flex justify-center">
<button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 hover:bg-blue-600 rounded text-lg">Button</button>
<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 hover:bg-gray-200 rounded text-lg">Button</button>
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
<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-col text-center w-full mb-20">
<h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
</div>

<div className="flex flex-wrap -m-4">

<div className="p-4 lg:w-1/2">
<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
<img alt="team" className="shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
<div className="grow sm:pl-8">
<h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
<h3 className="text-gray-500 mb-3">UI Developer</h3>
<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
</div>
</div>
</div>

<div className="p-4 lg:w-1/2">
<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
<img alt="team" className="shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
<div className="grow sm:pl-8">
<h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
<h3 className="text-gray-500 mb-3">Designer</h3>
<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
</div>
</div>
</div>

<div className="p-4 lg:w-1/2">
<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
<img alt="team" className="shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"/>
<div className="grow sm:pl-8">
<h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
<h3 className="text-gray-500 mb-3">UI Developer</h3>
<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
</div>
</div>
</div>

<div className="p-4 lg:w-1/2">
<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
<img alt="team" className="shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206"/>
<div className="grow sm:pl-8">
<h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
<h3 className="text-gray-500 mb-3">Designer</h3>
<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
</div>
</div>
</div>

</div>
</div>
</section>
</>
)
}

function Services(){
return(
<>
<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">

<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
</div>

<div className="flex flex-wrap -m-4">

<div className="xl:w-1/3 md:w-1/2 p-4">
<div className="border border-gray-200 p-6 rounded-lg">
<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co.</p>
</div>
</div>

<div className="xl:w-1/3 md:w-1/2 p-4">
<div className="border border-gray-200 p-6 rounded-lg">
<h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co.</p>
</div>
</div>

<div className="xl:w-1/3 md:w-1/2 p-4">
<div className="border border-gray-200 p-6 rounded-lg">
<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co.</p>
</div>
</div>

</div>
</div>
</section>
</>
)
}

export default function App(){
return(
<BrowserRouter>

<nav className="bg-gray-900 text-white p-4 flex gap-6">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/services">Services</Link>
</nav>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
</Routes>

</BrowserRouter>
)
}
