package routes

import "backend/resume/controllers"

func (app *Routes) PublicMail() {

	app.RestV1.Post("/send-mail", controllers.SendMail)

}
