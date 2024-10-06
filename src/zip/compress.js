import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const file = path.join(__dirname, "files", "fileToCompress.txt");
  const destArch = path.join(__dirname, "files", "archive.gz");

  const ws = createWriteStream(destArch);
  const rs = createReadStream(file);
  const gzip = zlib.createGzip();

  ws.on("error", (err) => {
    console.log(err.message);
  });

  rs.on("error", (err) => {
    console.log(err.message);
  });

  rs.pipe(gzip).pipe(ws);
};

await compress();
