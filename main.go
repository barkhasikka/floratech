package main

import (
	gorillarpc "cut2it/externals/gorilla/rpc"
	gorillajson "cut2it/externals/gorilla/rpc/json"
	handlers "ec_webapp/externals/gorilla/handlers"
	"ec_webapp/externals/gorilla/mux"
	"floratechno/clientrpc/landing"
	"floratechno/connections"
	c "floratechno/flag"
	"html/template"
	"log"
	"net/http"
)

func main() {

	rtr := mux.NewRouter() //create a new router from the imported Gorilla Mux pckg
	rtr.HandleFunc("/", landing)
	log.Println("calling to mailer-------------")
	go connections.CallMAIL()
	log.Println("Server started on port" + c.WEBPORT)
	http.Handle("/", handlers.CORS()(rtr))
	rtr.HandleFunc("/about", about)
	rtr.HandleFunc("/js/{subdir}/{file}", serveResource)
	rtr.HandleFunc("/css/{file}", serveResource)
	rtr.HandleFunc("/assets/{file}", serveResource)
	rtr.HandleFunc("/{file}", headerPage)

	jsonRPC := gorillarpc.NewServer()
	jsonCodec := gorillajson.NewCodec()
	jsonRPC.RegisterCodec(jsonCodec, "application/json")
	jsonRPC.RegisterCodec(jsonCodec, "application/json; charset=UTF-8") // For firefox 11 and other browsers which append the charset=UTF-8
	jsonRPC.RegisterService(new(landingservice.LandingService), "")
	rtr.Handle("/api/", jsonRPC)
	log.Fatal(http.ListenAndServe(c.WEBPORT, nil))

}

func about(wr http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		//Get API call to find the color config of user.
		t := template.Must(template.ParseFiles("template/headerpages/about.html"))

		err := t.Execute(wr, nil)
		if err != nil {
			http.Error(wr, "Error parsing template, ["+err.Error()+"]", http.StatusInternalServerError)
		}
	}
}
