import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Page/Home';
import CreateBlog from './Page/CreateBlog';
import Profile from './Page/Profile';
import MyBlogs from './Page/MyBlogs';
import Id from './Page/Id';


function App() {
  return (
    <div className=" mx-24">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createPost" element={<CreateBlog/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/post" element={<MyBlogs/>}/>
        <Route path="/post/:id" element={<Id/>}/>
      </Routes>
    </div>
  );
}

export default App;
