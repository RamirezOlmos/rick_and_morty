
import React from "react";
import imagen from './BlackHole.png'

export default function About() {
  return (
    <>
      <div>
         <img className="imagen" src={imagen} alt="Character" />
      </div>
      <div className="content">
        <h1>Who am I?</h1>
        <p>My name is Deneb Ramirez.</p>
        <p>I am web designer and developer.</p>
        <p>I built solid expertise in html, css and javascript.</p>
        <p>I focus on creating clean and unique design.</p>
      </div>
    </>
  );
}
