import fs from "fs"
import exists from "./exists.js"

const create = async () => {
  // Write your code here
  const fileName = "fresh.txt"
  const text = "I am fresh and young"
  const path = `src/fs/files/${fileName}`

  if (await exists(path)) throw Error("FS operation failed")

  await fs.writeFile(path, text, () => {})
}

await create()
