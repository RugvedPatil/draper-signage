import styles from "./css/Footer.module.css"

function Footer(params) {
    return (
        <div class={styles.container}>
            <hr></hr>
            <div class={styles.content}>
                <div style={{display:"flex","flex-direction":"row",gap:"84px"}}>
                    <p>Draper 2025</p> 
                    <div class={styles.documentation}>
                        <p>API</p>
                        <p>FAQ</p>
                        <p>Support</p>
                    </div>
                </div>

                <p>Privacy Policy - License</p>
            </div>
        </div>
    )
}

export default Footer;