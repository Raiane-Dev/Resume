FROM golang:1.19-alpine AS build

LABEL project="waf"

## CONFIG GOLANG
ENV PATH="$PATH:$(go env GOPATH)/bin"
ENV CGO_ENABLED 0
ENV GOPATH /go
ENV GOCACHE /go-build
ENV GOOS linux

RUN apk update && \
		 apk add ca-certificates && \
		  apk add tzdata

COPY ./backend ./
COPY ./frontend/dist /public

RUN go mod tidy

RUN cd cmd && \
		go build -o main


FROM alpine:latest as finally

WORKDIR /app

COPY --from=build /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=build /go/src/cmd/main ./

ENTRYPOINT ["/app/main"]