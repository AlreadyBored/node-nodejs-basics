import { open } from "fs/promises";
import { pipeline } from "node:stream/promises";
import zlib from "zlib";

export const decompress = async () => {
  const output = await open("./src/zip/files/fileToCompress.txt", "w+");
  const input = await open("./src/zip/files/archive.gz");
  pipeline(
    input.createReadStream(),
    zlib.createGunzip(),
    output.createWriteStream()
  );
};

decompress();
