package landing

import (
	"floratechno/connections"
	ctxcommon "floratechno/context/common"
	ctxlanding "floratechno/context/landing"
	"fmt"
	"io/ioutil"
	"log"
)

func SendContactUs(args *ctxlanding.ContactUs, res *ctxcommon.EmptyReply) error {
	reply := &ctxcommon.EmptyReply{}
	EmailCall := connections.MAILClient.Go("EmailR.SendContactUsMail", args, reply, nil)
	EmailCallReply := <-EmailCall.Done

	if EmailCallReply.Error != nil {
		return EmailCallReply.Error //return RegisterPerson from reply
	}
	return nil
}

func GetTeamPictures(args *ctxcommon.EmptyReply, res *ctxlanding.GetTeamPictureRes) error {
	files, err := ioutil.ReadDir("public/assets/team")
	if err != nil {
		log.Print(err)
	}
	log.Println("length", len(files))
	var teamPictures = make([]ctxlanding.Picture, len(files))
	for i, f := range files {
		fmt.Println(f.Name())
		teamPictures[i] = ctxlanding.Picture{
			Name: f.Name(),
			Path: "public/assets/team",
		}
	}
	res.Pictures = teamPictures
	return nil
}
