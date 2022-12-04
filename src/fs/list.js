import { readdir } from "node:fs/promises"
import path from "path"

const list = async () => {
  try {
    const files = await readdir(path.resolve("./files"))

    files.forEach((file) => {
      console.log(file)
    })
  } catch {
    console.log("FS operation failed")
  }
};

await list();
