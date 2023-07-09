"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
  // state: test
  const [test, setTest] = useState(undefined)
  // effect: fetch test
  useEffect(() => {
    // setup connection
    let connection = axios.create({ baseURL: "" })
    
    // TEST
    connection.get("/api")
      .then((res) => {
        alert("RECEIVED")
      })
  }, [])

  return (
    <h1> Hello World </h1>
  )
}
