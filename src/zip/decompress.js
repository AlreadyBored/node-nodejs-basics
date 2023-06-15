import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { rename } from "node:fs/promises";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  const path = "src/zip/files/";
  const archive = path + "archive.gz";
  const src = path + "fileToCompress.txt.gz";
  const dst = path + "fileToCompress.txt";

  const unzip = createUnzip();

  //we have to rename given archive to target file_name + ".gz"
  //otherwise decompression will return empty content
  await rename(archive, src);

  const srcStream = createReadStream(src);
  const dstStream = createWriteStream(dst);

  await pipeline(srcStream, unzip, dstStream).catch((error) => {
    console.error(`error during uncompressing: ${error}`);
  });
};

await decompress();
