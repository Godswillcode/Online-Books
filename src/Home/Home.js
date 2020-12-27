import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="outer">
          <Navbar />
          <div className="d-flex justify-content-center align-items-center text-center h-75 pt-5">
            <div className="detail container">
              <h1>Study to shew thyself approved</h1>
              <NavLink to="/book">
                {" "}
                <button className="my-btn my-btn-2"> Start Now </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
