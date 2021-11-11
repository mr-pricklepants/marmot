import "./App.css";
import a from "./imgs/a.jpeg";
import b from "./imgs/b.jpeg";
import c from "./imgs/c.jpeg";
import d from "./imgs/d.jpeg";
import e from "./imgs/e.jpeg";
import f from "./imgs/f.jpeg";
import g from "./imgs/g.jpeg";
import h from "./imgs/h.jpeg";
import i from "./imgs/i.jpeg";
import j from "./imgs/j.jpeg";

function App() {
  var mastheadImage = [a, b, c, d, e, f, g, h, i, j];
  var selectedImage =
    mastheadImage[Math.floor(Math.random() * mastheadImage.length)];

  return (
    <div className="App">
      <header className="App-header">
        <img src={selectedImage} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
