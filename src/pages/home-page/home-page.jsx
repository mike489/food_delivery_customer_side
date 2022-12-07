import React, { useState } from "react";
import Search from "../../components/search/search";
import Card from "../../components/card/card";

const HomePage = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Yetsom firfir", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC7jiOS79-my-ZqKd8oCWUmXvOO3SNYqt0qhxD_9GCQ&s" },
    { id: 2, name: "Special Burger", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC7jiOS79-my-ZqKd8oCWUmXvOO3SNYqt0qhxD_9GCQ&s" },
    { id: 3, name: "Margherita Pizza", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC7jiOS79-my-ZqKd8oCWUmXvOO3SNYqt0qhxD_9GCQ&s" },
    { id: 4, name: "Lasagna", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC7jiOS79-my-ZqKd8oCWUmXvOO3SNYqt0qhxD_9GCQ&s" },
  ]);

  return (
    <>
      <div
        className="container-fluid text-center p-5"
        style={{ backgroundColor: "#d4d2fc" }}
      >
        <h1 style={{ color: "#5a53c4" }}>ENIBLA</h1>
        <p>Get the food of your choice on your finger tip.</p>
        <Search />
        <button className="btn btn-large btn-info">Sign-up</button>
        <br />
        <br />
        <span>
          {" "}
          Already have an account? <a href="#">Login here</a>{" "}
        </span>
      </div>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-sm-3">
              <Card src={item.picture} title={item.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
