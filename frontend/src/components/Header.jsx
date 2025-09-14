import { useNavigate } from "@solidjs/router";

import styles from "./css/Header.module.css"

import { logo, sheduler, info, integration, settings } from "../assets/imports";

function Header() {
    const navigate = useNavigate();

    return (
        <div class={styles.container}>
            <img src={logo}></img>

            <div class={styles.menu}>
                <div style={{ display: "flex", "flex-direction": "row", gap: "8px" }} onClick={() => { navigate("/") }}>
                    <img src={sheduler} width="24px"></img>
                    <p class={styles.menuOption} >Sheduler</p>
                </div>
                <div style={{ display: "flex", "flex-direction": "row", gap: "8px" }}>
                    <img src={integration} width="24px"></img>
                    <p class={styles.menuOption}>Integrations</p>
                </div>
                <div style={{ display: "flex", "flex-direction": "row", gap: "8px" }} onClick={() => { navigate("/settings") }}>
                    <img src={settings} width="24px"></img>
                    <p class={styles.menuOption} >Settings</p>
                </div>
                <div style={{ display: "flex", "flex-direction": "row", gap: "8px" }} onClick={() => { navigate("/sysinfo") }}>
                    <img src={info} width="24px"></img>
                    <p class={styles.menuOption} >System Info</p>
                </div>
            </div>
        </div>
    )
}

export default Header;