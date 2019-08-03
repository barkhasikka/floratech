package landing

type ContactUs struct {
	Name,
	Email,
	Subject,
	MobileNo,
	Content string
}

type GetTeamPictureRes struct {
	Pictures []Picture
}

type Picture struct {
	Path string
	Name string
}
