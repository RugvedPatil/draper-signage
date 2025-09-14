package services

import (
	"fmt"
	"net"
	"os"
	"runtime"
	"strconv"
	"strings"
	"syscall"
)

func GetLoadPercent() (float64, error) {
	data, err := os.ReadFile("/proc/loadavg")
	if err != nil {
		return 0, err
	}
	fields := strings.Fields(string(data))
	if len(fields) < 1 {
		return 0, fmt.Errorf("unexpected format in /proc/loadavg")
	}

	load1, err := strconv.ParseFloat(fields[0], 64)
	if err != nil {
		return 0, err
	}

	// Get number of CPU cores
	cores := float64(runtime.NumCPU())

	// Convert load to percentage
	percent := (load1 / cores) * 100
	return percent, nil
}

func GetFreeSpace() (float64, error) {
	var stat syscall.Statfs_t
	err := syscall.Statfs("/", &stat)
	if err != nil {
		return 0, err
	}
	// Free blocks * block size = free bytes
	freeBytes := stat.Bavail * uint64(stat.Bsize)
	freeGB := float64(freeBytes) / (1024 * 1024 * 1024)
	return freeGB, nil
}

func GetMAC() (string, error) {
	interfaces, err := net.Interfaces()
	if err != nil {
		return "", err
	}
	for _, iface := range interfaces {
		if iface.Flags&net.FlagLoopback == 0 && iface.HardwareAddr != nil {
			return iface.HardwareAddr.String(), nil
		}
	}
	return "", fmt.Errorf("no MAC address found")
}

func GetSerialNumber() (string, error) {
	data, err := os.ReadFile("/sys/firmware/devicetree/base/serial-number")
	if err != nil {
		fmt.Println("errro reading file")
		return "", err
	}

	fmt.Println("read serial number : ", data)
	return "00000000", nil
}

func GetLocalIP() (string, error) {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	defer conn.Close()

	localAddress := conn.LocalAddr().(*net.UDPAddr)
	return localAddress.IP.String(), nil
}
