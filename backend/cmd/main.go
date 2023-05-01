package main

import (
	"backend/resume/routes"
	"os"
)

func main() {
	routes := routes.New()

	routes.NewPublicAPI()
	routes.NewWeb()

	routes.Server.Listen(os.Getenv("SERVER_PORT"))

}
