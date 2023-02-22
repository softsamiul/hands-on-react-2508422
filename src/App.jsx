import React, {Component} from "react"
import { render } from "react-dom";
import Support from "./components/support";
import Welcome from "./components/Welcome";


function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />

            <Welcome name="Samiul" />
            <Welcome name="Tanmoy" />
            <Welcome name="Firoz" />

            <Support />

          <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
