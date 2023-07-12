import { MongoClient } from "mongodb"

// mongo: setup connection
let client = new MongoClient("mongodb+srv://sewonkim:sewonkim@cluster0.qurklkn.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
client.connect((err) => {
    console.log("MONGODB CONNECTION ERROR")
})
console.log("CONNECTION SUCCESS")

// mongo: get database
let database = client.db("doc")
console.log(database)

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200)
        res.send("GET")
    } else if (req.method === "POST") {
        res.status(200)
        res.send("POST")
    }
}