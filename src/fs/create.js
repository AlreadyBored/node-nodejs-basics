import fs from "fs/promises"
import { exists, getFilesPath } from "../utils/index.js"

const create = async () => {
  // Write your code here
  const text = "I am fresh and young"
  const path = getFilesPath(import.meta.url, "fresh.txt")

  if (await exists(path)) throw Error("FS operation failed")

  await fs.writeFile(path, text)
}

await create()
