import {appendFile} from "fs"
import {join, dirname} from "path";
import {fileURLToPath} from "url"

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename)
  const pathToFolder = "files"
  const fileName = "fileToWrite.txt"
  const path = join(__dirname, pathToFolder, fileName)
  process.stdin.on("data", (data) => {
    appendFile(path, data.toString(), (err) => {
      if (err) {
        throw err
      }
  })
  })
};

await write();