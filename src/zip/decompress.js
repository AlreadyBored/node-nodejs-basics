import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  // Write your code here
  const readStream = createReadStream("archive.gz");

  const writeStream = createWriteStream("src/zip/files/fileToCompress.txt");

  const gunzip = createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(
      `File "archive.gz" has been decompressed to "fileToCompress.txt" successfully.`
    );
  });

  writeStream.on("error", (err) => {
    console.error(`Error decompressing file: ${err.message}`);
  });

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await decompress();
