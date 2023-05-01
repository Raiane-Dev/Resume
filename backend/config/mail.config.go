package config

import (
	"net/smtp"
	"os"
)

func ConnectionMail() *smtp.Client {

	smtpServer := "smtp.gmail.com"
	smtpPort := "587"
	smtpUsername := os.Getenv("MAIL")
	smtpPassword := os.Getenv("MAIL_PASS")

	auth := smtp.PlainAuth("", smtpUsername, smtpPassword, smtpServer)

	conn, err := smtp.Dial(smtpServer + ":" + smtpPort)
	if err != nil {
		panic(err)
	}

	if err := conn.Auth(auth); err != nil {
		panic(err)
	}

	return conn
}
