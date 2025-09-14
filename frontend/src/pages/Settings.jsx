import { createEffect } from "solid-js"
import { createStore } from "solid-js/store"
import axios from "axios"

import styles from "./styles/Settings.module.css"

import {
    Header, ToggleButton, Dropdown,
    Footer, Input
} from "../components/import"

import { backspace } from "../assets/imports"

function Settings() {
    const [settings, setSettings] = createStore({
        player: "",
        displayDuration: 5,
        maxActiveAssets: 5,
        audioOutputs: "",
        dateFormat: "dd-mm-yyy",
        authType: "Disabled",
        screenOrientation: "Landscape",
        splashScreen: false,
        debugLogging: false,
        assetsBackup: false,
        assetsBackupDuration: 0,
        settingsBackup: false,
        settingsBackupDuration: 0,
    });

    function getSettings(params) {
        const apiurl = import.meta.env.VITE_URL
        axios.get(`${apiurl}/api/settings/`).
            then((res) => {
                res.data.authType = res.data.authType ? "Enabled" : "Disabled"
                setSettings(res.data)
            });
    }

    createEffect(() => {
        getSettings();
    });

    function updateSettings() {
        const playerName = document.getElementById("player-name-input").value;
        const displayDuration = parseInt(document.getElementById("display-duration-input").value);
        const maxActiveAssets = parseInt(document.getElementById("max-active-assets-input").value);
        const audioOutput = document.getElementById("audio-output-list").value;
        const dateFormat = document.getElementById("date-format-list").value;
        const authType = document.getElementById("authentication-list").checked;
        const screenOrientation = document.getElementById("screen-orient-list").value;
        const splashScreen = document.getElementById("splashscreen-input").checked;
        const debugLogging = document.getElementById("debuglog-input").checked;
        const assetsBackup = document.getElementById("asset-backup-input").checked;
        const settingsBackup = document.getElementById("settings-backup-input").checked;

        const body = {
            "player": playerName,
            "displayDuration": displayDuration,
            "maxActiveAssets": maxActiveAssets,
            "audioOutputs": audioOutput,
            "dateFormat": dateFormat,
            "authType": authType,
            "screenOrientation": screenOrientation,
            "splashScreen": splashScreen,
            "debugLogging": debugLogging,
            "assetsBackup": assetsBackup,
            "settingsBackup": settingsBackup
        }

        const apiurl = import.meta.env.VITE_URL
        axios.post(`${apiurl}/api/settings`, body).
            then((res) => {
                console.log(res.data);
            });

    }


    return (
        <div>
            <Header />
            <div class={styles.container}>
                <div class={styles.titleContainer}>
                    <p class={styles.titleName}>Device Settings</p>
                    <div class={styles.normalButton} style={{ display: "flex", "flex-direction": "row", gap: "8px", cursor: "pointer" }}>
                        <img src={backspace}></img>
                        <p style={{ margin: '0', width: 'fit-content' }}>Reset default</p>
                    </div>
                </div>

                <div style={{ display: "flex", "flex-direction": "column", gap: "22px" }}>
                    <div class={styles.itemContainer}>
                        <p style={{ "font-size": "28px", "font-weight": "600", "color": "#2B2B2B", "margin": "0" }}>Basic</p>
                        <Input id="player-name-input" title="Player Name" placeholder="Draper Signage" type="text" value={settings.player}></Input>
                        <div style={{ display: "flex", "flex-direction": "row", "align-items": "center", gap: "12px" }}>
                            <Input id="display-duration-input" title="Display Duration" placeholder="10sec" type="number" style={{ width: "186px" }} value={settings.displayDuration}></Input>
                            <Input id="max-active-assets-input" title="Max Active Assests" placeholder="5" type="text" style={{ width: "186px" }} value={settings.maxActiveAssets}></Input>
                        </div>

                        <Dropdown title="Audio Output" id="audio-output-list" name="audio-output-dropdown" options={["HDMI", "3.5mm Jack", "USB", "Disabled"]} value={settings.audioOutputs} />
                        <Dropdown title="Date Format" id="date-format-list" name="date-format-dropdown" options={["dd-mm-yyyy", "mm-dd-yyyy", "yyyy-dd-mm"]} value={settings.dateFormat} />
                        <Dropdown title="Authentication" id="authentication-list" name="auth-dropdown" options={["Enabled", "Disabled"]} value={settings.authType} />
                        <Dropdown title="Screen Orientation" id="screen-orient-list" name="screen-orient-dropdown" options={["Portrait ", "Landscape", "Auto"]} value={settings.screenOrientation} />

                        <div style={{ display: "flex", "flex-direction": "row", "align-items": "center" }}>
                            <p>Splash Screen</p>
                            <ToggleButton id="splashscreen-input" checked={settings.splashScreen} />
                        </div>
                        <div style={{ display: "flex", "flex-direction": "row", "align-items": "center" }}>
                            <p>Debug Logging</p>
                            <ToggleButton id="debuglog-input" checked={settings.debugLogging} />
                        </div>
                        <div style={{ display: "flex", "flex-direction": "row", gap: "12px" }}>
                            <div class={styles.mediumButton} style={{ "background-color": "#2B2B2B" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-weight": "500" }}>Clear</p>
                            </div>
                            <div class={styles.mediumButton} style={{ "background-color": "#585D47" }} onClick={updateSettings}>
                                <p style={{ margin: '0', width: 'fit-content', "font-weight": "500" }}>Save</p>
                            </div>
                        </div>
                    </div>

                    <div class={styles.itemContainer}>
                        <p style={{ "font-size": "28px", "font-weight": "600", "color": "#2B2B2B", "margin": "0" }}>Backup</p>
                        <div style={{ display: "flex", "flex-direction": "row", "align-items": "center", "font-weight": "500" }}>
                            <p>Assests Backup</p>
                            <ToggleButton id="asset-backup-input" checked={settings.assetsBackup} />
                        </div>
                        <div style={{ display: "flex", "flex-direction": "row", gap: "12px" }}>
                            <Input id="assets-backup-duration-input" title="Duration" placeholder="5 days" type="text" style={{ width: "200px" }} value={settings.assetsBackupDuration}></Input>
                            <div class={styles.smallButton} style={{ "background-color": "#585D47", "align-self": "flex-end" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-size": "14px", "font-weight": "500" }}>download</p>
                            </div>
                            <div class={styles.smallButton} style={{ "background-color": "#585D47", "align-self": "flex-end" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-size": "14px", "font-weight": "500" }}>upload</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", "flex-direction": "row", "align-items": "center", "font-weight": "500" }}>
                            <p>Settings Backup</p>
                            <ToggleButton id="settings-backup-input" checked={settings.settingsBackup} />
                        </div>
                        <div style={{ display: "flex", "flex-direction": "row", gap: "12px" }}>
                            <Input id="settings-backup-duration-input" title="Duration" placeholder="5 days" type="text" style={{ width: "200px" }} value={settings.settingsBackupDuration}></Input>
                            <div class={styles.smallButton} style={{ "background-color": "#585D47", "align-self": "flex-end" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-size": "14px", "font-weight": "500" }}>download</p>
                            </div>
                            <div class={styles.smallButton} style={{ "background-color": "#585D47", "align-self": "flex-end" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-size": "14px", "font-weight": "500" }}>upload</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", "flex-direction": "row", gap: "12px" }}>
                            <div class={styles.mediumButton} style={{ "background-color": "#2B2B2B" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-weight": "500" }}>Clear</p>
                            </div>
                            <div class={styles.mediumButton} style={{ "background-color": "#585D47" }}>
                                <p style={{ margin: '0', width: 'fit-content', "font-weight": "500" }}>Save</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Settings