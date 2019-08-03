package landingservice

import (
	ctxcommon "floratechno/context/common"
	ctxlanding "floratechno/context/landing"
	innerrpc "floratechno/innerrpc/landing"
	"net/http"
)

type LandingService struct{}

func (s *LandingService) SendContactUs(r *http.Request, args *ctxlanding.ContactUs, res *ctxcommon.EmptyReply) error {

	return innerrpc.SendContactUs(args, res)
}

func (s *LandingService) GetTeamPictures(r *http.Request, args *ctxcommon.EmptyReply, res *ctxlanding.GetTeamPictureRes) error {

	return innerrpc.GetTeamPictures(args, res)
}
