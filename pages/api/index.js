import { createClient } from "edgedb"

let client

(async () => {
    client = await createClient()
})();

export default async function handler(req, res) {
    client.query(`select 2 + 2`)

    res.send({})
}