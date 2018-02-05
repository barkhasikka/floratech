package main

import (
	"bufio"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

var (
	CacheSince = time.Now().Format(http.TimeFormat)
	CacheUntil = time.Now().AddDate(0, 0, 1).Format(http.TimeFormat)
)

func landing(wr http.ResponseWriter, req *http.Request) {
	log.Println("Landing hit")
	if req.Method == "GET" {
	log.Println("Sending to parse");
		t, err := template.ParseFiles("template/index.html")

		if err != nil {
			http.Error(wr, "Error parsing template, ["+err.Error()+"]", http.StatusInternalServerError)
			return
		}

		err = t.Execute(wr, nil)
	}
}

func serveResource(wr http.ResponseWriter, req *http.Request) {
	log.Println("In :" + req.URL.Path)
	path := "public" + req.URL.Path

	var contentType string

	// identify the content type of the requested file
	if strings.HasSuffix(path, ".css") {
		contentType = "text/css"
	} else if strings.HasSuffix(path, ".png") {
		contentType = "image/png"
	} else if strings.HasSuffix(path, ".jpg") {
		contentType = "image/jpg"
	} else if strings.HasSuffix(path, ".gif") {
		contentType = "image/gif"
	} else if strings.HasSuffix(path, ".svg") {
		contentType = "image/svg+xml"
	} else if strings.HasSuffix(path, ".js") {
		contentType = "application/javascript"
	} else if strings.HasSuffix(path, ".swf") {
		contentType = "application/x-shockwave-flash"
	} else if strings.HasSuffix(path, ".mp4") {
		contentType = "video/mp4"
	} else if strings.HasSuffix(path, ".pdf") {
		contentType = "application/pdf"
	} else {
		contentType = "text/plain"
	}
	//https://stackoverflow.com/questions/499966/etag-vs-header-expires
	f, err := os.Open(path) // open the file
	if err == nil {
		fileInfo, _ := f.Stat()
		fileModTime := fileInfo.ModTime().String()
		fileSize := fileInfo.Size()
		eTag := fileModTime + strconv.Itoa(int(fileSize))
		defer f.Close()
		wr.Header().Add("Content-Type", contentType) // add the file content type to the http header
		//wr.Header().Set("Last-Modified", CacheSince)
		//wr.Header().Set("Expires", CacheUntil)
		wr.Header().Add("ETag", eTag)

		if match := req.Header.Get("If-None-Match"); match != "" {
			if strings.Contains(match, eTag) {
				wr.WriteHeader(http.StatusNotModified)
				return
			}
		}
		br := bufio.NewReader(f) // read the file to a buffer
		br.WriteTo(wr)           // write the buffer to the client

	} else {
		http.NotFound(wr, req) // return a 404 if there was an error Opening the file
	}

	//log.Println("Out :" + req.URL.Path)
}
