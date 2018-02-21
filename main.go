package main

import (
	handlers "ec_webapp/externals/gorilla/handlers"
	"ec_webapp/externals/gorilla/mux"
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
	rtr.HandleFunc("/{file}", headerPage)
	log.Fatal(http.ListenAndServe(c.WEBPORT, nil))
}
