package routes

import (
	"github.com/gin-gonic/gin"

	"drapersignage/controllers"
)

/* Planed API Route

/api

/api/settings
/api/settings/basic
/api/settings/backups

/api/assets
/api/assets/add
/api/assets/delete
/api/assets/list


*/

func SetupRoutes(r *gin.Engine) {
	// API routes group
	api := r.Group("/api")
	{
		api.GET("/", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{"message": "server is runnig"})
		})

		settings := api.Group("/settings")
		{
			settings.GET("/", controllers.GetSettings)
			settings.GET("/basic", controllers.GetBasicSettings)
			settings.GET("/backups", controllers.GetBackupSettings)

			settings.POST("/basic", controllers.PostBasicSettings)
			settings.POST("/backups", controllers.PostBackupSettings)
		}

		sysinfo := api.Group("/sysinfo")
		{
			sysinfo.GET("/", controllers.GetSysinfo)
		}

		assets := api.Group("/assets")
		{
			assets.GET("/", controllers.GetAssetsList)
			assets.POST("/add", controllers.UploadAssets)
		}
	}
}
