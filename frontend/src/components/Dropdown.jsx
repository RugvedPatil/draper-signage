import styles from "./css/Dropdown.module.css"

function Dropdown(props) {
    const options = props.options;
    return (
        <div class={styles.container}>
            <p style={{ "font-size": "14px", "font-weight": "400", "color": "#2B2B2B", "margin": "0" }}>{props.title}</p>
            <select id={props.id} name={props.name} class={styles.selectMenu} value={props.value}>
                {
                    options.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown;