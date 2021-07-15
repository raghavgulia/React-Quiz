import { React, useState } from "react";
import Ques from "./components/Ques.js";
import { createGlobalStyle } from "styled-components";

function App() {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      <Global />
      <Ques
        title="What two words every programmer learned to code first?"
        options="Programming Languages/./Hello World/./PHP Sucks/./None of these"
        correct="2"
        total={total}
        setTotal={setTotal}
      />
      <Ques
        title="Where did programmers learn to program?"
        options="Standfort/./IIT/./StackOverFlow/./All of these"
        correct="3"
        total={total}
        setTotal={setTotal}
      />
      <Ques
        title="What is the biggest lie in computer programming?"
        options="PHP is the best/./HTML is a programming language"
        correct="2"
        total={total}
        setTotal={setTotal}
      />
      <h3>Select the option which defines the following best: </h3>
      <Ques
        title="Programmer"
        options="An organism that turns caffeine and pizza into software/./Genius Person/./A normal human"
        correct="1"
        total={total}
        setTotal={setTotal}
      />
      <Ques
        title="Algorithms"
        options="Step by Step solution to a problem/./Word used by programmers when they do not want to explain what they did/./Spitting on tech giants/./Useless Things"
        correct="2"
        total={total}
        setTotal={setTotal}
      />
      <h5>Total Score: {total}/2500</h5>
    </div>
  );
}

const Global = createGlobalStyle`h3{
  font-size:xx-large;
}
body{background-color:black;
background-image:
radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;color:floralwhite;font-family:"Inter", sans-serif;
} h5{font-size:100px;}::-webkit-scrollbar {
  width: 10px;
}


::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
} `;

export default App;
