import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const inputFilePath = "./files/fileToCompress.txt";
  const outputFilePath = "./files/archive.gz";
  const readStream = fs.createReadStream(inputFilePath);

  const writeStream = fs.createWriteStream(outputFilePath);

  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("finish compress");
  });
};

await compress();
