export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
        res.send("GET REQ RECEIVED")
    } else if (req.method === "POST") {
        res.status(200)
        res.send("POST REQ RECEIVED: " + req.body)
    }
}