import React from 'react';

export default function HeroSections() {
  return (
    <div className="justify-items-center mt-40">
      <div className="hero-content text-center border-indigo-500/75 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
        <div className="max-w-md bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Hello there!</h1>
          <p className="py-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/get-started" className="btn btn-primary bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}