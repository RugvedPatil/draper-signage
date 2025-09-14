package models

type Assets struct {
	Name       string `json:"name"`
	Duration   int    `json:"duration"`
	Resolution int    `json:"resolution"`
	UploadOn   string `json:"uploadOn"`
	IsActive   bool   `json:"isActive"`
}
