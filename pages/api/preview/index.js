import fs from "fs"

export default function handler(req, res) {
  let videoName = req.body
  let video = fs.readFileSync(process.cwd() + `/videos/${videoName}.mp4`)
  res.setHeader("Content-Type", "video/mp4")
  res.send(video)
}

// large data config
export const config = {
  api: {
    responseLimit: false
  }
}