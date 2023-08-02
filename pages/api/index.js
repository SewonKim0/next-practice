import fs from "fs"

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
        res.send("GET REQ RECEIVED")
    } else if (req.method === "POST") {
        let videoName = req.body;
        let videoBuffer = fs.readFileSync("./video-data.json")
        let videoJson = JSON.parse(videoBuffer.toString())
        
        res.status(200)
        res.json(videoJson[videoName])
    }
}