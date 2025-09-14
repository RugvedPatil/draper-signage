import styles from "./css/Input.module.css"

function Input(props) {
    return (
        <div class={styles.container}>
            <p style={{ "font-size": "14px", "font-weight": "400", "color": "#000000", "margin": "0" }}>{props.title}</p>
            <input id={props.id} class={styles.textarea} placeholder={props.placeholder} type={props.type} style={props.style} value={props.value} oninput={props.oninput}></input>
        </div>
    )
}

export default Input;