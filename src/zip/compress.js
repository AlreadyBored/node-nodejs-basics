import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const compress = async () => {
  const path = "src/zip/files/";
  const src = path + "fileToCompress.txt";
  const dst = path + "archive.gz";

  const gzip = createGzip();

  const srcStream = createReadStream(src);
  const dstStream = createWriteStream(dst);

  await pipeline(srcStream, gzip, dstStream).catch((error) => {
    console.error(`error during compressing: ${error}`);
  });
};

await compress();
