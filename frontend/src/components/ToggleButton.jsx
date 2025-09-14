import styles from "./css/ToggleButton.module.css"

function ToggleButton(props) {
    return (
        <input id={props.id} class={styles.switch} type="checkbox" checked={props.checked}></input>
    )
}

export default ToggleButton;