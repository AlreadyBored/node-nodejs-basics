import { createReadStream, createWriteStream, read, write } from "node:fs";
import { createGunzip } from "node:zlib";

const txtFile = import.meta.dirname + "/files/fileToCompress.txt";
const zipFile = import.meta.dirname + "/files/archive.gz";

const decompress = async () => {
  try {
    const archiveStream = createGunzip();
    const readStream = createReadStream(zipFile);
    const writeStream = createWriteStream(txtFile);
    readStream.pipe(archiveStream).pipe(writeStream);

    writeStream.on("finish", () => {
      console.log("File decompressed successfully");
    });
  } catch (error) {
    throw new Error(error);
  }
};

await decompress();
