import styles from "./css/Button.module.css"

function Button(props) {
    const color = props.color ? props.color : "#585D47"
    return (
        <div class={styles.container} style={{ "background-color": color}}>
            <p class={styles.title}>Save</p>
        </div>
    )
}

export default Button;