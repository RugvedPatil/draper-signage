import { useNavigate } from "@solidjs/router";

import styles from "./css/NoContent.module.css"
import { logo, playerActive } from "../assets/import";

function NoContent(params) {
    const navigate = useNavigate();
    return (
        <div class={styles.container}>
            <img onClick={()=>{navigate("/nonetwork")}} src={logo} alt="logo-image" />
            <div class={styles.modal}>
                    <img src={playerActive} alt="active-player-icon" />
                <div class={styles.modelText}>
                    <p class={styles.modalTitle}>Player Active</p>
                    <p class={styles.modalContent}>To manage the content on this screen, open the webpage below while
                        connected to the same network.
                    </p>
                </div>
                <div class={styles.hilightedContent}>
                    <p>{"http://192.168.0.1:3003"}</p>
                </div>
            </div>
        </div>
    )
}

export default NoContent;