import { appendFile, stat } from "node:fs/promises"
import path from "path"

const create = async () => {
  const resolvedPath = path.resolve("./files/fesh.txt")
  let fileStats

  try {
    fileStats = await stat(resolvedPath)
  } catch {}

  if (fileStats) {
    throw new Error("FS operation failed")
  }

  try {
    await appendFile(resolvedPath, "I am fresh and young")
  } catch (err) {
    console.log(err)
  }
};

await create();
