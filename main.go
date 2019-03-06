package main

import (
	handlers "floratechno/externals/gorilla/handlers"
	"floratechno/externals/gorilla/mux"
	c "floratechno/flag"
	"log"
	"net/http"
)

func main() {
	rtr := mux.NewRouter() //create a new router from the imported Gorilla Mux pckg
	rtr.HandleFunc("/", landing)

	log.Println("Server started on port" + c.WEBPORT)
	http.Handle("/", handlers.CORS()(rtr))
	rtr.HandleFunc("/js/{subdir}/{file}", serveResource)
	rtr.HandleFunc("/css/{file}", serveResource)
	rtr.HandleFunc("/assets/{file}", serveResource)
	log.Fatal(http.ListenAndServe(c.WEBPORT, nil))

}
