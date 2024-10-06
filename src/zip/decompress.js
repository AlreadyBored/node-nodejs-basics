import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const file = path.join(__dirname, "files", "fileToCompress.txt");
  const destArch = path.join(__dirname, "files", "archive.gz");

  const ws = createWriteStream(file, "utf-8");
  const rs = createReadStream(destArch);
  const gunzip = zlib.createGunzip();

  ws.on("error", (err) => {
    console.log(err.message);
  });

  rs.on("error", (err) => {
    console.log(err.message);
  });

  rs.pipe(gunzip).pipe(ws);
};

await decompress();
