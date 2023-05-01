package models

import (
	"backend/resume/config"
	"backend/resume/entities"
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
		panic(err)
	}
	if err := conn.Rcpt(req.Email); err != nil {
		panic(err)
	}
	wc, err := conn.Data()
	if err != nil {
		panic(err)
	}
	defer wc.Close()

	if _, err := wc.Write(message); err != nil {
		panic(err)
	}

	return nil
}
