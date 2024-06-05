import React from "react";
import Category, {categories, filterCategory} from "./components/category";
import Card from "./components/card";
import "./App.css"

function App() {
  return (
    <main className="container">
      {
        categories.map((category, index) => {
          return (
            <Category category={category} key={index}>
              {filterCategory(index).map((item) => {
                return (
                  <Card
                    key={item.fish}
                    fish={item.fish}
                    src={item.src}
                    size={item.size}
                    location={item.location}
                    description={item.description}
                  />
                )
              })}
            </Category>
          )
        })
      }
    </main>
  );
}

export default App;
