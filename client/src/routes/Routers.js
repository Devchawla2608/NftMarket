import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import SignIn from "../components/SignIn/SignIn.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Explore from "../pages/Explore.jsx";
import Profile from "../pages/Profile.jsx";
import Post from "../pages/Post.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
};

export default Routers;
