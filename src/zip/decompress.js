import fs from "fs";
import zlib from "zlib";
import path from "path";
import {fileURLToPath} from "url";

const decompress = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const fileArchive = path.join(folderPath, "archive.gz");
  const readStream = fs.createReadStream(fileArchive);
  const writeStream = fs.createWriteStream(
    path.join(folderPath, "fileToCompress.txt")
  );
  const unzip = zlib.createUnzip();
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();

// decompress.js - implement function that decompresses archive.gz
// back to the fileToCompress.txt with same content as before compression using zlib and Streams API
