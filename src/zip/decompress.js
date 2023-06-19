import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { archiveUrl, fileUrl } from "./constants.js";

const decompress = async () => {
  await pipeline(
    createReadStream(archiveUrl),
    createGunzip(),
    createWriteStream(fileUrl)
  );
};

await decompress();
