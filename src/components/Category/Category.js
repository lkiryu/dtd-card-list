import styles from "./Category.module.css"

const Category = (props) => {
    return(
        <section className={styles.category}>
            <h2>{props.category}</h2>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default Category