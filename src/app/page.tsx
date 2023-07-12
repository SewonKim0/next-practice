"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { MongoClient } from "mongodb"

export default function Home() {
  // axios: setup connection
  let connection = axios.create({ baseURL: "" })

  // state: text
  const [text, setText] = useState(undefined)
  // effect: get text
  useEffect(() => {
    // TEST
    connection.post("/api")
      .then((res) => {
        console.log("RECEIVED: ")
        console.log(res.data)
      })
  }, [])

  return (
    <div className={styles.container}>
      {/* Doc */}
      <textarea 
        className={styles.doc}
        defaultValue={text === undefined ? "" : text}>
      </textarea>

      {/* Save Button */}
      <button
        className={styles["save-button"]}
        onClick={() => {
          // save doc text
        }}  
      >
        Save
      </button>
    </div>
  )
}
