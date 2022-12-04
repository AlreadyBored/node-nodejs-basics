import { createWriteStream } from "node:fs"
import path from "path"

const write = async () => {
  const writeStream = createWriteStream(path.resolve("./files/fileToWrite.txt"))

  process.stdin.pipe(writeStream)
};

await write();
