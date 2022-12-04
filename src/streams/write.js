import fs from "fs"
import { getFilesPath } from "../utils/index.js"

const write = async () => {
  // Write your code here
  const path = getFilesPath(import.meta.url, "fileToWrite.txt")
  const fileStream = fs.createWriteStream(path)
  const dataStream = process.stdin
  dataStream.on("data", chunk => fileStream.write(chunk))
}

await write()
