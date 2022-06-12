import stream from "stream";
import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";

export const decompress = async () => {
  // Write your code here
  const basePath = "src/zip";
  const folderPath = `${basePath}/files`;

  const unzip = zlib.createUnzip();
  const inp = createReadStream(`${folderPath}/archive.gz`);
  const out = createWriteStream(`${folderPath}/fileToCompress.txt`);

  stream.pipeline(inp, unzip, out, (error) => {
    return error && console.log("decompress stream error", error);
  });
};

export default (() => {
  decompress();
})();
