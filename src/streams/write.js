import fs from "fs"

const write = async () => {
  // Write your code here
  const path = "src/streams/files/fileToWrite.txt"
  const fileStream = fs.createWriteStream(path)
  const dataStream = process.stdin
  dataStream.on("data", chunk => fileStream.write(chunk))
}

await write()
