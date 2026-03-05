import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function ThemePalette({ setTheme }) {
  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-full p-3 flex gap-2 z-50">
      <button onClick={() => setTheme("blue")} className="w-6 h-6 rounded-full bg-blue-500"></button>
      <button onClick={() => setTheme("pink")} className="w-6 h-6 rounded-full bg-pink-500"></button>
      <button onClick={() => setTheme("green")} className="w-6 h-6 rounded-full bg-green-500"></button>
      <button onClick={() => setTheme("purple")} className="w-6 h-6 rounded-full bg-purple-500"></button>
      <button onClick={() => setTheme("dark")} className="w-6 h-6 rounded-full bg-gray-900"></button>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled.
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white theme-btn border-0 py-2 px-6 focus:outline-none hover:opacity-90 rounded text-lg">
                Button
              </button>

              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState("blue");

  return (
    <BrowserRouter>
      <div className={`theme-${theme}`}>
        <nav className="flex justify-center gap-6 py-6 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <ThemePalette setTheme={setTheme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
