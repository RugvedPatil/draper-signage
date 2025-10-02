import { createSignal } from "solid-js"
import axios from "axios"

import styles from "./styles/Home.module.css"

import { Header, Footer, ToggleButton, AddAssets } from "../components/import"

import {
    addAssets, imageIcon, videoIcon, dragIcon, downloadFileIcon, deleteFileIcon,
    editFileIcon
} from "../assets/imports"

import { logo } from "../assets/imports"

function Home() {
    const [assetsPopup, setAssetsPopup] = createSignal(false);
    const activeAssets = [
        {
            "name": "Default Image",
            "duration": 10,
            "resolution": "1920x1080",
            "uploadOn": "16/07/2025 00:00:00",
            "isActive": 1,
            "type": 100
        },
        {
            "name": "Ganesh Chaturthi 2025",
            "duration": 10,
            "resolution": "1920x1080",
            "uploadOn": "17/07/2025 00:00:00",
            "isActive": 1,
            "type": 100
        },
        {
            "name": "Swayam Showcase",
            "duration": 60,
            "resolution": "1920x1080",
            "uploadOn": "20/07/2025 00:00:00",
            "isActive": 1,
            "type": 101
        }
    ]
    function uploadFile() {
        let formData = new FormData();
        let imageFile = document.getElementById("upload-assests-holder").files[0]
        formData.append('image', imageFile);
        console.log(imageFile);
        const apiurl = import.meta.env.VITE_URL
        axios.post(`${apiurl}/api/assets/add`, formData, {
            headers: { 'Content-Type': "multipart/form-data" }
        }).
            then((res) => {
                console.log(res.data);
            });

    }

    function renderAssetsList(data) {
        return data.toReversed().map((asset) => {
            return (
                <tr>
                    <td>
                        <div class={styles.tableTitles}>
                            <img src={dragIcon} alt="dragplate-icon"></img>
                            <img src={asset.type === 100 ? imageIcon : videoIcon} alt="assets-type-icon"></img>
                            <p style={{ margin: 0 }}>{asset.name}</p>
                        </div>
                    </td>
                    <td>{asset.duration}sec</td>
                    <td>{asset.resolution}</td>
                    <td>{asset.uploadOn}</td>
                    <td>
                        <ToggleButton checked={asset.isActive} />
                    </td>
                    <td>
                        <div class={styles.assetsOptionContainer}>
                            <img class={styles.assetsOptions} src={downloadFileIcon} alt="dragplate-icon"></img>
                            <img class={styles.assetsOptions} src={deleteFileIcon} alt="assets-type-icon"></img>
                            <img class={styles.assetsOptions} src={editFileIcon} alt="assets-type-icon"></img>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            {assetsPopup() === true ? <AddAssets onclick={uploadFile} state={assetsPopup} setState={setAssetsPopup} /> : null}
            <Header />
            <div class={styles.container}>
                <div class={styles.titleContainer}>
                    <p class={styles.titleName}>Scheduler Overview</p>
                    <div class={styles.normalButton} style={{ display: "flex", "flex-direction": "row", gap: "8px", cursor: "pointer" }} onClick={() => { setAssetsPopup(true) }}>
                        <img src={addAssets} alt="add-assets"></img>
                        <p style={{ margin: '0', width: 'fit-content' }}>Add Assets</p>
                    </div>
                </div>

                <div class={styles.assetsContainer} state="active">
                    <div class={styles.assetsContainerTitle}>
                        <p style={{ margin: 0 }}>Active Assets</p>
                        <input class={styles.assetsContainerSearchInput} placeholder="Search"></input>
                    </div>
                    <table class={styles.tableContainer}>
                        <thead>
                            <tr style={{ "border-bottom": "1px solid #2B2B2B80;" }}>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Resolution</th>
                                <th>Uploaded On</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderAssetsList(activeAssets)
                            }
                        </tbody>
                    </table>

                </div>

                <div class={styles.assetsContainer} style={{ "background-color": "#C1A78C80", "border-left": "15px solid #6D3C41" }} state="inactive">
                    <div class={styles.assetsContainerTitle}>
                        <p style={{ margin: 0 }}>Inactive Assets</p>
                        <input class={styles.assetsContainerSearchInput} placeholder="Search"></input>
                    </div>
                    <table class={styles.tableContainer}>
                        <thead>
                            <tr style={{ "border-bottom": "1px solid #2B2B2B80;" }}>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Resolution</th>
                                <th>Uploaded On</th>
                                <th>Activity</th>
                            </tr>
                            <tr>
                                <td>
                                    <div class={styles.tableTitles}>
                                        <img src={dragIcon} alt="dragplate-icon"></img>
                                        <img src={imageIcon} alt="assets-type-icon"></img>
                                        <p style={{ margin: 0 }}>Default Image</p>
                                    </div>
                                </td>
                                <td>10Sec</td>
                                <td>1080p</td>
                                <td>16/07/2025 00:00:00</td>
                                <td>
                                    <ToggleButton />
                                </td>
                                <td>
                                    <div class={styles.assetsOptionContainer}>
                                        <img class={styles.assetsOptions} src={downloadFileIcon} alt="dragplate-icon"></img>
                                        <img class={styles.assetsOptions} src={deleteFileIcon} alt="assets-type-icon"></img>
                                        <img class={styles.assetsOptions} src={editFileIcon} alt="assets-type-icon"></img>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home