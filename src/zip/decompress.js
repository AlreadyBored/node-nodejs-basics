import { unzip } from "node:zlib";
import { createWriteStream, createReadStream } from "node:fs";
import { Transform, pipeline } from "node:stream";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const checkAndHandleError = (error) => {
  if (error) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
};

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const rs = createReadStream(join(__dirname, "files/archive.gz"));
  const ws = createWriteStream(join(__dirname, "files/fileToCompress.txt"));
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      unzip(chunk, (error, result) => {
        checkAndHandleError(error);
        callback(null, result);
      });
    },
  });

  pipeline(rs, transform, ws, checkAndHandleError);
};

await decompress();
