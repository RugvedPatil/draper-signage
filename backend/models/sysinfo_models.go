package models

type Sysinfo struct {
	Load         float64 `json:"load"`
	FreeSpace    int     `json:"freeSpace"`
	Uptime       string  `json:"uptime"`
	Serialnumber string  `json:"serialnumber"`
	Version      string  `json:"version"`
	MacAdderess  string  `json:"macAddress"`
	LocalIP      string  `json:"localIp"`
}
