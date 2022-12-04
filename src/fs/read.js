import { exists } from "./utils.js"
import fs from "fs/promises"

const read = async () => {
  // Write your code here
  const fileToRead = "src/fs/files/fileToRead.txt"

  if (!(await exists(fileToRead))) throw Error("FS operation failed")

  const file = await fs.readFile(fileToRead, "utf8")
  console.log(file)
}

await read()
