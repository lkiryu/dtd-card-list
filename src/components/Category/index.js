import React from "react"
import styles from "./category.module.css"

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