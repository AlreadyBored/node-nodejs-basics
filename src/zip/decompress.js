import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { ARCHIVE_PATHNAME, TEXT_PATHNAME } from "./config.js";

const decompress = async () => {
  await pipeline(
    createReadStream(ARCHIVE_PATHNAME),
    createGunzip(),
    createWriteStream(TEXT_PATHNAME)
  );
};

await decompress();
