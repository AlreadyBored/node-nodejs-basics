import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, "files");

const compress = async () => {
  const gzip = createGzip();
  const fileToCompress = createReadStream(
    path.join(filesFolder, "fileToCompress.txt")
  );
  const archive = createWriteStream(path.join(filesFolder, "archive.gz"));

  fileToCompress.pipe(gzip).pipe(archive);
};

await compress();
