import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      <Routes>
        <Route
          path="/"
          element={<TextForm heading="Enter the text to analyze" />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
