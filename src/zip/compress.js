import fs from "fs";
import {createGzip} from "zlib";
import {pipeline} from "stream/promises";
import path from "path";
import {fileURLToPath} from "url";

const compress = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fileToCompress.txt");
  const fileDest = path.join(folderPath, "archive.gz");
  const gzip = createGzip();
  const source = fs.createReadStream(filePath);
  const destination = fs.createWriteStream(fileDest);
  await pipeline(source, gzip, destination);
};

await compress();
