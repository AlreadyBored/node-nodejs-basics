import { open } from "fs/promises";
import { pipeline } from "node:stream/promises";
import zlib from "zlib";

export const compress = async () => {
  const input = await open("./zip/files/fileToCompress.txt");
  const output = await open("./zip/files/archive.gz", "wx");
  pipeline(
    input.createReadStream(),
    zlib.createGzip(),
    output.createWriteStream()
  );
};

compress();
