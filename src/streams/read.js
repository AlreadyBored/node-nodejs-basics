import fs from "fs"

const read = async () => {
  // Write your code here
  const path = "src/streams/files/fileToRead.txt"
  const readable = fs.createReadStream(path)
  readable.on("data", chunk => process.stdout.write(chunk))
}

await read()
