import { useNavigate } from "@solidjs/router";
import styles from "./css/NoNetwork.module.css"
import { logo, noNetwork, qrcode } from "../assets/import";

function NoNetwork(params) {
    const navigate = useNavigate();
    return (
        <div class={styles.container}>
            <img onClick={()=>{navigate("/error")}} src={logo} alt="logo-image" />
            <div class={styles.modal}>
                <img src={noNetwork} alt="active-player-icon" />
                <div class={styles.modelText}>
                    <p class={styles.modalTitle}>No network connection was found</p>
                    <p class={styles.modalContent}>To connect to WIFI networking, simple connect to the access point
                        using any device with WIFI and network access
                    </p>
                </div>
                <div class={styles.hilightedContent}>
                    <div>
                        <p>SSID: {"Draper Connect"}</p>
                        <p>Password: {"Draper4321"}</p>
                        <p>Address: {"192.168.0.100:3000"}</p>
                    </div>
                    <img src={qrcode} />
                </div>
            </div>
        </div>
    )
}

export default NoNetwork;