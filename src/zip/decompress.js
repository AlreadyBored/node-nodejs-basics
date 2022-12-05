import {fileURLToPath} from "url";
import {dirname, join} from "path";
import {createReadStream, createWriteStream} from "fs";
import {createUnzip} from "zlib";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename)
  const pathToFolder = "files"
  const newFileName = "fileToCompress.txt"
  const fileName = "archive.gz"
  const path = join(__dirname, pathToFolder, fileName)
  const newPath = join(__dirname, pathToFolder, newFileName)

  createReadStream(path).pipe(createUnzip()).pipe(createWriteStream(newPath))
};

await decompress();