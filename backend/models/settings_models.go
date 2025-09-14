package models

type Settings struct {
	Player                 string `json:"player"`
	DisplayDuration        int    `json:"displayDuration"`
	MaxActiveAssets        int    `json:"maxActiveAssets"`
	AudioOutput            string `json:"audioOutputs"`
	DateFormat             string `json:"dateFormat"`
	AuthType               bool   `json:"authType"`
	ScreenOrientation      string `json:"screenOrientation"`
	SplashScreen           bool   `json:"splashScreen"`
	DebugLogging           bool   `json:"debugLogging"`
	AssetsBackup           bool   `json:"assetsBackup"`
	SettingsBackup         bool   `json:"settingsBackup"`
	AssetsBackupDuration   int    `json:"assetBackupDuration"`
	SettingsBackupDuration int    `json:"settingsBackupDuration"`
}

type BasicSettings struct {
	Player            string `json:"player"`
	DisplayDuration   int    `json:"displayDuration"`
	MaxActiveAssets   int    `json:"maxActiveAssets"`
	AudioOutput       string `json:"audioOutputs"`
	DateFormat        string `json:"dateFormat"`
	AuthType          bool   `json:"authType"`
	ScreenOrientation string `json:"screenOrientation"`
	SplashScreen      bool   `json:"splashScreen"`
	DebugLogging      bool   `json:"debugLogging"`
}

type BackupSettings struct {
	AssetsBackup           bool `json:"assetsBackup"`
	AssetsBackupDuration   int  `json:"assetBackupDuration"`
	SettingsBackup         bool `json:"settingsBackup"`
	SettingsBackupDuration int  `json:"settingsBackupDuration"`
}
