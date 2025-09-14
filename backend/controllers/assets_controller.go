package controllers

import (
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"

	"drapersignage/models"
)

func GetAssetsList(context *gin.Context) {
	assetsList := [1]models.Assets{
		{"Default Image", 5, 1080, "11-09-2025", false},
	}
	context.IndentedJSON(http.StatusOK, assetsList)
}

func UploadAssets(context *gin.Context) {
	file, err := context.FormFile("image")
	if err != nil {
		context.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	dst := filepath.Join("uploads", file.Filename)
	if err := context.SaveUploadedFile(file, dst); err != nil {
		context.IndentedJSON(http.StatusInternalServerError, "Error saving uploaded file")
		return
	}
	context.IndentedJSON(http.StatusOK, file)
}
