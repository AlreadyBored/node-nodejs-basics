import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileUrl, archiveUrl } from "./constants.js";

const compress = async () => {
  await pipeline(
    createReadStream(fileUrl),
    createGzip(),
    createWriteStream(archiveUrl)
  );
};

await compress();
