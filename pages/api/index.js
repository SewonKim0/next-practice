import fs from "fs"

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
        res.send(process.cwd())
    } else if (req.method === "POST") {
        console.log(process.cwd())
        let videoName = req.body;
        let videoBuffer = fs.readFileSync(process.cwd() + "/video-data.json")
        let videoJson = JSON.parse(videoBuffer.toString())
        
        res.status(200)
        res.json(videoJson[videoName])
    }
}