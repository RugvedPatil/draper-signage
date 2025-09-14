package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"drapersignage/models"
)

/*
	GetSettings: fetch all the settings
	PostBasicSettings: update all basic settings
	PostBackupSettings: update all backup settings
	RestoreDefaultSettings: restore settings to their default config
*/

func GetSettings(context *gin.Context) {
	var settings models.Settings
	jsonFile, err := os.Open("settings.json")
	if err != nil {
		fmt.Println(err)
	}
	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
	}
	json.Unmarshal(byteValue, &settings)
	context.IndentedJSON(http.StatusOK, settings)
}

func GetBasicSettings(context *gin.Context) {
	var settings models.Settings
	jsonFile, err := os.Open("settings.json")
	if err != nil {
		fmt.Println(err)
	}
	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
	}
	json.Unmarshal(byteValue, &settings)
	basicSettings := models.BasicSettings{
		Player:            settings.Player,
		DisplayDuration:   settings.DisplayDuration,
		MaxActiveAssets:   settings.MaxActiveAssets,
		AudioOutput:       settings.AudioOutput,
		DateFormat:        settings.DateFormat,
		AuthType:          settings.AuthType,
		ScreenOrientation: settings.ScreenOrientation,
		SplashScreen:      settings.SplashScreen,
		DebugLogging:      settings.DebugLogging,
	}
	context.IndentedJSON(http.StatusOK, basicSettings)
}

func GetBackupSettings(context *gin.Context) {
	var settings models.Settings
	jsonFile, err := os.Open("settings.json")
	if err != nil {
		fmt.Println(err)
	}
	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
	}
	json.Unmarshal(byteValue, &settings)
	backupSettings := models.BackupSettings{
		AssetsBackup:           settings.AssetsBackup,
		AssetsBackupDuration:   settings.AssetsBackupDuration,
		SettingsBackup:         settings.SettingsBackup,
		SettingsBackupDuration: settings.SettingsBackupDuration,
	}
	context.IndentedJSON(http.StatusOK, backupSettings)
}

func PostBasicSettings(context *gin.Context) {
	var settings models.BasicSettings

	if err := context.BindJSON(&settings); err != nil {
		fmt.Println("json received was not as expected")
		context.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println("received new settings ", settings)
	settingsJson, err := json.Marshal(settings)
	if err != nil {
		fmt.Println("error parsing data", settings)
	}
	err = os.WriteFile("settings.json", settingsJson, 0644)
	if err != nil {
		fmt.Println("error writing to the file")
	}
	context.IndentedJSON(http.StatusCreated, settings)
}

func PostBackupSettings(context *gin.Context) {
	var settings models.BackupSettings

	if err := context.BindJSON(&settings); err != nil {
		fmt.Println("json received was not as expected")
		context.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	settingsJson, err := json.Marshal(settings)
	if err != nil {
		fmt.Println("error parsing data", settings)
		context.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	err = os.WriteFile("settings.json", settingsJson, 0644)
	if err != nil {
		fmt.Println("error writing to the file")
	}
	context.IndentedJSON(http.StatusCreated, settings)
}
