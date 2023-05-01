package controllers

import (
	"backend/resume/models"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func SendMail(c *fiber.Ctx) (reterr error) {

	var userRequest models.UserInput
	if err := c.BodyParser(&userRequest); err != nil {
		c.Status(http.StatusBadGateway).JSON(&models.UserOutput{
			Message: "Err data",
		})
		return
	}

	if err := userRequest.SendMail(); err != nil {
		c.Status(http.StatusBadGateway).JSON(&models.UserOutput{
			Message: "Err send mail",
		})
		return

	}

	return
}
