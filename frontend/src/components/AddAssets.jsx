import styles from "./css/AddAssets.module.css"
import { uploadImg } from "../assets/imports"

function AddAssets(props) {
    return (
        <div class={styles.backdroup} onClick={()=>{props.setState(false)}}>
            <div class={styles.container}>
                <p class={styles.title}>Upload File</p>
                <p class={styles.subtitle}>Add images and videos here</p>
                <label class={styles.dropZone}>
                    <input id="upload-assests-holder" type="file" accept="image/*,video/*" hidden></input>
                    <img src={uploadImg} width="100"></img>
                    <p>Drop your file here, or click to browse</p>
                </label>
                <div class={styles.note}>
                    <p>Supported files: png, jpeg, webp ,mp4, mov, avi </p>
                    <p>Maximum size: 100MB</p>
                </div>
                <div class={styles.normalButton} style={{ display: "flex", "flex-direction": "row", gap: "8px", cursor: "pointer" }} onclick={props.onclick}>
                    <p style={{ margin: '0', width: 'fit-content' }}>Continue</p>
                </div>
            </div>

        </div>

    )
}

export default AddAssets