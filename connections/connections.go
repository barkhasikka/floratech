package connections

import (
	c "floratechno/flag"
	"log"
	"net/rpc"
	"time"
)

var (
	MAILClient *rpc.Client
)

//Sets up the RPC connection between MO and the web app
func init() {
	//	go CallMAIL()
}

func CallMAIL() {
	var err error
	log.Println("Dialing Mailer through RPC...")

	MAILIP := c.LOCALHOST + c.MAILPORT
	for i := 0; i < 100; i++ {
		MAILClient, err = rpc.DialHTTP("tcp", MAILIP)
		if err != nil {
			time.Tick(3000) //3 second delay
		} else {
			log.Println("Dial finished, Email is connected")
			return
		}
	}
	//	log.Fatal("Internal Network Failure, Mail is unresponsive " + err.Error())
}
