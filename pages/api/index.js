export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            console.log("GET")
            res.status(200)
            res.json({"success": "success"})
        case "POST":
            console.log("POST")
            res.status(200)
            res.json({"success": "success"})
    }
}