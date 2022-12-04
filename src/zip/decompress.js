import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToArchive = path.join(__dirname, "files", "archive.gz");
const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
    const gzip = createUnzip();

    const source = createReadStream(pathToArchive);
    const destination = createWriteStream(pathToFile);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error(err);
        }
        process.exitCode = 1;
      });
};

await decompress();
