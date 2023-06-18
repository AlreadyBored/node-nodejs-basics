import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const targetPath = new URL("./files/fileToCompress.txt", import.meta.url);
  const compressedPath = new URL("./files/archive.gz", import.meta.url);

  const readStream = fs.createReadStream(targetPath, "utf-8");
  const writeStream = fs.createWriteStream(compressedPath);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`File ${targetPath} has been compressed to ${compressedPath}`);
  });
};

await compress();
