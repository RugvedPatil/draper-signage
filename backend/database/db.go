package database

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func SetupDatabase() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "./database/test.db")
	if err != nil {
		return nil, err
	}
	defer db.Close()

	createTable := `
	CREATE TABLE IF NOT EXISTS assets (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
		duration INTEGER
		resolution INTEGER
		uploadOn TEXT
		isactive BOOLEAN
	);
	`
	_, err = db.Exec(createTable)
	if err != nil {
		log.Fatal(err)
		return nil, err
	}
	return db, nil
}
