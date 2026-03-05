import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

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
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh.
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 hover:bg-blue-600 rounded text-lg">
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

          {/* cards stay same */}
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
              Pitchfork Kickstarter
            </h1>

            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>

          {/* service cards stay same */}

        </div>
      </section>
    </>
  );
}

export default function App() {

  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>

      <div className={`app ${theme}`}>

        {/* NAVBAR */}

        <nav className="flex justify-between p-6 shadow">

          <h1 className="text-xl font-bold">My Website</h1>

          <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
          </div>

        </nav>

        {/* THEME BUTTONS */}

        <div className="fixed top-5 right-5 flex gap-3 z-50">

          <button
            onClick={() => setTheme("light")}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Dark
          </button>

          <button
            onClick={() => setTheme("danger")}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Danger
          </button>

        </div>

        {/* ROUTES */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}
