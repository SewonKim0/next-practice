// mongo: setup connection
let client = new MongoClient("mongodb+srv://sewonkim:sewonkim@cluster0.qurklkn.mongodb.net/")
client.connect()

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
        res.send("GET")
    } else if (req.method === "POST") {
        res.status(200)
        res.send("POST")
    }
}