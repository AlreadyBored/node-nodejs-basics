import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const txtFile = import.meta.dirname + "/files/fileToCompress.txt";
const zipFile = import.meta.dirname + "/files/archive.gz";

const compress = async () => {
  try {
    const archiveStream = createGzip();
    const readStream = createReadStream(txtFile);
    const writeStream = createWriteStream(zipFile);
    readStream.pipe(archiveStream).pipe(writeStream);

    writeStream.on("finish", () => {
      console.log("File compressed successfully");
    });
  } catch (error) {
    throw new Error(error);
  }
};

await compress();
