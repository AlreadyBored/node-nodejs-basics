import { createReadStream } from "node:fs"
import path from "path"

const read = async () => {
  const readStream = createReadStream(path.resolve("./files/fileToRead.txt"))

  readStream.pipe(process.stdout)
};

await read();
