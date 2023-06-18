import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const compressedPath = new URL("./files/archive.gz", import.meta.url);
  const targetPath = new URL("./files/fileToCompress.txt", import.meta.url);

  const readStream = fs.createReadStream(compressedPath);
  const writeStream = fs.createWriteStream(targetPath);
  const gzip = zlib.createGunzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`File ${compressedPath} has been decompressed to ${targetPath}`);
  });
};

await decompress();
