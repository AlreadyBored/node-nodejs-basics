import {createGzip} from "zlib"
import {createWriteStream, createReadStream} from "fs"
import {fileURLToPath} from "url";
import {dirname, join} from "path";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename)
  const pathToFolder = "files"
  const fileName = "fileToCompress.txt"
  const newFileName = "archive.gz"
  const path = join(__dirname, pathToFolder, fileName)
  const newPath = join(__dirname, pathToFolder, newFileName)

  createReadStream(path).pipe(createGzip()).pipe(createWriteStream(newPath))
};

await compress();