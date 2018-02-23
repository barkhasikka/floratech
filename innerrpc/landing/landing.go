package landing

import (
	"cut2it/spew"
	"floratechno/connections"
	ctxcommon "floratechno/context/common"
	ctxlanding "floratechno/context/landing"
)

func SendContactUs(args *ctxlanding.ContactUs, res *ctxcommon.EmptyReply) error {
	spew.WriteHead("SendContactUsMail")
	spew.Println("this is send contact us fun..")
	reply := &ctxcommon.EmptyReply{}
	EmailCall := connections.MAILClient.Go("EmailR.SendContactUsMail", args, reply, nil)
	EmailCallReply := <-EmailCall.Done

	if EmailCallReply.Error != nil {
		return EmailCallReply.Error //return RegisterPerson from reply
	}
	spew.Println("this is send contact us fun....... response")
	return nil
}
