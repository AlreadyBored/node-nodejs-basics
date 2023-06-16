import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { getDirName } from "../utils/utils.js";
import { pipeline } from "stream/promises";

const decompress = async () => {
  const archPath = getDirName(import.meta.url) + "/files/archive.gz";
  const srcPath = getDirName(import.meta.url) + "/files/fileAfterCompress.txt";

  await pipeline(
    createReadStream(archPath),
    createGunzip(),
    createWriteStream(srcPath)
  );
};

await decompress();
