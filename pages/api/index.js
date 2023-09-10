import * as edgedb from "edgedb"

const client = edgedb.createClient()

export default async function handler(req, res) {
    const person = await client.query(`
    select Person {
        name,
        age
    }
    `)
    res.send(person)
}