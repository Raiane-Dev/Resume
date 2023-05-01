package routes

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Routes struct {
	Server *fiber.App
	RestV1 fiber.Router
}

func New() *Routes {
	app := &Routes{
		Server: fiber.New(),
	}

	app.Server.Use(cors.New(cors.Config{
		AllowOrigins: os.Getenv("HOSTS_ALLOWED"),
		AllowHeaders: "*",
		AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH",
	}))

	app.Server.Use(compress.New())

	app.Server.Static("/", "/public", fiber.Static{
		Compress: true,
		Browse:   true,
	})

	app.RestV1 = app.Server.Group("/api/v1")

	return app
}

func (app *Routes) NewPublicAPI() *fiber.App {
	app.PublicMail()
	return app.Server
}

func (app *Routes) NewWeb() {
	app.Server.Get("/*", func(c *fiber.Ctx) error {
		return c.SendFile("/public/index.html")
	})
}
