package main

import (
	"cut2it-mail/spew"
	handlers "ec_webapp/externals/gorilla/handlers"
	"ec_webapp/externals/gorilla/mux"
	c "floratechno/flag"
	"log"
	"net/http"

	"github.com/sogko/go-wordpress"
)

func main() {

	client := wordpress.NewClient(&wordpress.Options{
		BaseAPIURL: "http://192.168.99.100:32777/wp-json/wp/v2", //  `http://192.168.99.100:32777/wp-json/wp/v2`  http://192.168.1.14:1234/wordpress/wp-admin/ http://192.168.1.14:1234/wordpress/2018/02/22/new-post
		Username:   "ecexell@gmail.com",
		Password:   "Iloveec@1",
	})

	log.Println("client------------------------this is -----------------------this ---------that---is ----------client")
	spew.Dump(client)
	var meInterface interface{}
	currentUser, resp, _, err := client.Users().Me(meInterface)

	spew.Dump(currentUser)
	log.Println("currentUser------------------------this is -----------------------this ---------that---is ----------currentUser")
	//			log.Println(body)
	log.Println("body------------------------this is -----------------------this ---------that---is ----------body")
	spew.Dump(resp)
	log.Println("resp.StatusCode------------------------this is -----------------------this ---------that---is ----------resp.StatusCode")
	log.Println(err)
	//	if resp.StatusCode != http.StatusOK {
	//		// handle error
	//	}

	var obj interface{}
	respn, body2, err := client.Get("/posts/1", nil, &obj)
	log.Println("respn=============this is===================this ========that===is ====-respn")
	log.Println(respn)
	log.Println("body2=============this is===================this ========that===is ====-body2")
	log.Println(body2)
	log.Println("err=============this is===================this ========that===is ====-err")
	log.Println(err)

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
