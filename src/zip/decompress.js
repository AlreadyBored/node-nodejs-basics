import {fileURLToPath} from "node:url";
import path from "node:path";
import {pipeline} from "node:stream/promises";
import {createReadStream, createWriteStream} from "node:fs";
import {createGunzip} from "node:zlib";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const destPath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const srcPath = path.resolve(__dirname, 'files', 'archive.gz');
  await pipeline(createReadStream(srcPath), createGunzip(), createWriteStream(destPath))
};

await decompress();
