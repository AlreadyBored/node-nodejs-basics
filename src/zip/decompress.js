import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const archiveFile = path.join(__dirname, "files", "archive.gz");
const restoredFile = path.join(__dirname, "files", "fileToCompress.txt");
const decompress = async () => {
  const readStream = createReadStream(archiveFile);
  const writeStream = createWriteStream(restoredFile);
  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
