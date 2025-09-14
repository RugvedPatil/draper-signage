package main

import (
	"fmt"
	"log"
	"strings"

	"github.com/gin-gonic/gin"

	"drapersignage/database"
	"drapersignage/middleware"
	"drapersignage/routes"
	"drapersignage/services"
)

func main() {
	fmt.Println("[DATABASE] Initilizing...")
	db, err := database.SetupDatabase()
	if err != nil {
		log.Fatal(err)
		return
	}
	fmt.Println("[DATABASE] running", db)

	router := gin.Default()
	router.Use(middleware.CorsMiddleware())
	router.Static("/assets", "../portal/dist/assets")
	router.StaticFile("/", "../portal/dist/index.html")
	routes.SetupRoutes(router)

	var ip, errIP = services.GetLocalIP()
	if errIP != nil {
		fmt.Println("ip error")
		log.Fatal(err)
		return
	}
	var runat string = strings.Join([]string{ip, ":9090"}, "")
	router.Run(runat)
}
