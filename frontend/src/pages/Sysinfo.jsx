import axios from "axios";
import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import styles from "./styles/Sysinfo.module.css"

import { Header, Footer } from "../components/import"

function Sysinfo() {
    // const [systeminfo, setSysteminfo] = createEffect()
    const [systeminfo, setSysteminfo] = createStore({
        "load": 0,
        "freeSpace": 0,
        "uptime": "NA",
        "serialnumber": "NA",
        "version": "NA",
        "macAddress": "NA",
        "localIp": "NA"
    })
    function getSysInfo() {
        const apiurl  = import.meta.env.VITE_URL
        axios.get(`${apiurl}/api/sysinfo/`).
            then((res) => {
                setSysteminfo(res.data)
            })
    }
    createEffect(() => {
        getSysInfo();
        console.log(systeminfo);
    })
    return (
        <div>
            <Header />
            <div class={styles.container}>
                <div class={styles.titleContainer}>
                    <p class={styles.titleName}>System Info</p>
                </div>

                <div class={styles.assetsContainer} state="active">
                    <table class={styles.tableContainer}>
                        <thead>
                            <tr style={{ "border-bottom": "1px solid #2B2B2B80;" }}>
                                <th>Options</th>
                                <th style="width:70%">Values</th>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>System Load</td>
                                <td>{(systeminfo.load).toFixed(2)}%</td>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>Free Space</td>
                                <td>{systeminfo.freeSpace} GB</td>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>Uptime</td>
                                <td>{systeminfo.uptime}</td>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>Serial Number</td>
                                <td>{systeminfo.serialnumber}</td>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>Version</td>
                                <td>{systeminfo.version}</td>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>MAC Address</td>
                                <td>{systeminfo.macAddress}</td>
                            </tr>
                            <tr>
                                <td class={styles.tableTitles}>Local IP</td>
                                <td>{systeminfo.localIp}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sysinfo;