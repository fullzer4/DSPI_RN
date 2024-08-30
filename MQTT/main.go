package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

var messagePubHandler mqtt.MessageHandler = func(client mqtt.Client, msg mqtt.Message) {
	fmt.Printf("Received message: %s from topic: %s\n", msg.Payload(), msg.Topic())
}

var connectHandler mqtt.OnConnectHandler = func(client mqtt.Client) {
	fmt.Println("Connected")
}

var connectLostHandler mqtt.ConnectionLostHandler = func(client mqtt.Client, err error) {
	fmt.Printf("Connection lost: %v", err)
}

func MQTTPublishHandler(client mqtt.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var payload struct {
			Value bool `json:"value"`
		} 

		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			http.Error(w, "Failed to parse request body", http.StatusBadRequest)
			return
		}

		topic := "topic/test"

		if payload.Value {
			message := "acertou"
			token := client.Publish(topic, 0, false, message)
			token.Wait()

			if token.Error() != nil {
				http.Error(w, "Failed to publish MQTT message", http.StatusInternalServerError)
				return
			}

			fmt.Fprintf(w, "MQTT message published successfully")
		} else {
			message := "errou"
			token := client.Publish(topic, 0, false, message)
			token.Wait()

			if token.Error() != nil {
				http.Error(w, "Failed to publish MQTT message", http.StatusInternalServerError)
				return
			}

			fmt.Fprintf(w, "MQTT message published successfully")
		}
	}
}

func main() {
	opts := mqtt.NewClientOptions()
	opts.AddBroker("tls://02d7d2d555084a4492039686d9f5b9a3.s1.eu.hivemq.cloud:8883") 
	opts.SetClientID("back_go")             
	opts.SetUsername("fullzer4")        
	opts.SetPassword("Dp031001#")         

	opts.SetDefaultPublishHandler(messagePubHandler)
	opts.OnConnect = connectHandler
	opts.OnConnectionLost = connectLostHandler

	client := mqtt.NewClient(opts)
	if token := client.Connect(); token.Wait() && token.Error() != nil {
		panic(token.Error())
	}
	defer client.Disconnect(250)

	handler := func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World!")
	}

	http.HandleFunc("/", handler)
	http.HandleFunc("/mqtt-publish", MQTTPublishHandler(client))

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
