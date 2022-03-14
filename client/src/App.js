import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

import Blog from "./Blog";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function App() {
  return (
    <Router>
  

      <Navbar />





      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path ="/contact" element= {< Contact />} />
        <Route path = "/blog" element={<Blog/> }   />

        <Route path = "/signin" element={<SignIn/> }   />
        
        <Route path = "/signup" element={<SignUp/> }   />


        <Route path="*" element={<ErrorPage />} />


      </Routes>







      < Footer />



    </Router>
  );
}

export default App;
