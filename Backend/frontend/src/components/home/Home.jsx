import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
        <strong>Streamline Your Life</strong>
        </h1>
        <p className="text-center2">
        <b>Master Focus, Organization, and <br />Serenity with the Ultimate Todo App! </b>
        </p>
        <p> <i>Get started by clicking on the todo button</i></p>
        {/* <button href="frontend/todo/todo.jsx" class="home-btn p-2">Make Todo List</button> */}
      </div>
    </div>
  );
};

export default Home;
