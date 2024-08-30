FROM golang as build
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o mqtt

FROM gcr.io/distroless/static
COPY --from=build /app/mqtt /mqtt
ENTRYPOINT [ "/mqtt" ]