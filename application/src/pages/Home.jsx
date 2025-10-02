import { useNavigate } from "@solidjs/router";

import styles from "./css/Home.module.css"
import { logo } from "../assets/import";

function Home() {
    const navigate = useNavigate();
    return (
        <div class={styles.container}>
            <img onClick={()=>{navigate("/nocontent")}} src={logo} alt="logo-image" class={styles.image} />
        </div>
    )
}

export default Home;