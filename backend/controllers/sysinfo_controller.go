package controllers

import (
	"fmt"
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"

	"drapersignage/models"
	"drapersignage/services"
)

func GetSysinfo(context *gin.Context) {
	uptimeProcess := exec.Command("uptime", "-p")
	uptime, err := uptimeProcess.Output()
	if err != nil {
		fmt.Println("error occured", err)
	}

	avgLoad, err := services.GetLoadPercent()
	freeSpace, err := services.GetFreeSpace()
	macAddress, err := services.GetMAC()
	serialNumber, err := services.GetSerialNumber()
	ipAddress, err := services.GetLocalIP()

	var currentSysinfo = models.Sysinfo{
		Load:         avgLoad,
		FreeSpace:    int(freeSpace),
		Uptime:       string(uptime),
		Serialnumber: serialNumber,
		Version:      "0.0.1",
		MacAdderess:  macAddress,
		LocalIP:      ipAddress,
	}
	context.IndentedJSON(http.StatusOK, currentSysinfo)
}
