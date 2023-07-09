export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
        res.send("GET")
    } else if (req.method === "POST") {
        res.status(200)
        res.send("POST")
    }
}