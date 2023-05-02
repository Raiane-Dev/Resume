package models

import (
	"backend/resume/config"
	"backend/resume/entities"
	"log"
	"os"
)

type (
	UserInput  entities.UserInput
	UserOutput entities.UserOutput
)

func (req *UserInput) SendMail() error {

	var (
		conn = config.ConnectionMail()
	)

	message := []byte("To: " + req.Email + "\r\n" +
		req.Message + "\r\n")

	if err := conn.Mail(os.Getenv("MAIL")); err != nil {
		log.Println("Connection err", err)
		return err
	}
	if err := conn.Rcpt(req.Email); err != nil {
		log.Println("Connection rept", err)
		return err
	}
	wc, err := conn.Data()
	if err != nil {
		log.Println("Connection data", err)
		return err
	}
	defer wc.Close()

	if _, err := wc.Write(message); err != nil {
		log.Println("Connection write", err)
		return err
	}

	return nil
}
