import React from "react"
import marincaData from "../../json/marincaData.json"
import styles from "./Category.module.css"

export const categories = [
  "Blue Hole Shallows",
  "Blue Hole Medium Depth",
  "Blue Hole Depths",
  "Nocturnal",
  "Glacier Passage",
  "Glacier Zone",
  "HydroThermal Vents",
  "Seahorse",
  "Crab Trap",
]

export function filterCategory(index) {
  return marincaData.filter((marinca) => marinca.category === categories[index])
}


const Category = (props) => {
    return(
        <section className={styles.category}>
            <h2>{props.category}</h2>
            <div className={styles.cards}>
                {props.children}
            </div>
        </section>
    )
}

export default Category