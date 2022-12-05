import {createReadStream} from "fs"
import {dirname, join} from "path"
import {fileURLToPath} from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename)
  const pathToFolder = "files"
  const fileName = "fileToRead.txt"
  const path = join(__dirname, pathToFolder, fileName)
  createReadStream(path, "utf-8")
  .on("data", (fileChunk) => {
    process.stdout.write(fileChunk)
  })
};

await read();