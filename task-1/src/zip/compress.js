import stream from "stream";
import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";

export const compress = async () => {
  // Write your code here
  const basePath = "src/zip";
  const folderPath = `${basePath}/files`;

  const gzip = zlib.createGzip();
  const inp = createReadStream(`${folderPath}/fileToCompress.txt`, {
    encoding: "utf8",
  });
  const out = createWriteStream(`${folderPath}/archive.gz`);

  stream.pipeline(inp, gzip, out, (error) => {
    return error && console.log("compress stream error", error);
  });
};

export default (() => {
  compress();
})();
