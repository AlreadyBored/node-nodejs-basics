import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { ARCHIVE_PATHNAME, TEXT_PATHNAME } from "./config.js";

const compress = async () => {
  await pipeline(
    createReadStream(TEXT_PATHNAME),
    createGzip(),
    createWriteStream(ARCHIVE_PATHNAME)
  );
};

await compress();
