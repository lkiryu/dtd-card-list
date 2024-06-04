import React from "react";
import Category from "./components/category";
import Card from "./components/card";
import "./App.css"
import marincaData from "./json/marincaData.json"


function App() {
  return (
    <div className="container">
      <Category>
        {
          marincaData.map((item, index) => {
            return (
              <Card
                key={index}
                fish={item.fish}
                src={item.src}
                size={item.size}
                location={item.location}
                description={item.description}
              />
            )
          })
        }
      </Category>
    </div>
  );
}

export default App;
