package entities

type UserInput struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type UserOutput struct {
	Message string `json:"message"`
}
