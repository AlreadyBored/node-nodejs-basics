import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";

const decompress = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // Read data from file.
  let readableStream = fs.createReadStream(
    path.join(__dirname, "files", "archive.gz")
  );
  // Write data to file.
  let writeableStream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt"), { encoding: 'utf8' }
  );
  // unCompress data by 'Gunzip'!
  let gzip = zlib.createGunzip();
  //Use pipe bind read and write streams.
  readableStream.pipe(gzip).pipe(writeableStream);
};

await decompress();