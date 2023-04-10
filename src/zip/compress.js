import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  // Write your code here
  const readStream = createReadStream("src/zip/files/fileToCompress.txt");

  const writeStream = createWriteStream("archive.gz");

  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(
      `File fileToCompress.txt has been compressed to archive.gz successfully.`
    );
  });

  writeStream.on("error", (err) => {
    console.error(`Error compressing file: ${err.message}`);
  });

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await compress();
