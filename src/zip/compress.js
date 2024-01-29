import fs, { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const filePath = "./src/zip/files/fileToCompress.txt";
  const archivePath = "./src/zip/files/archive.gz";

  const errorMessage = "FS operation failed";

  const isFileExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      return false;
    }
  };

  const compressFile = async (path, archive) => {
    const stream = createReadStream(path);
    stream
      .pipe(createGzip())
      .pipe(createWriteStream(archive))
      .on("finish", () => {
        console.log(`Compression process done: ${archive}`);
      });
  };

  (await isFileExist(filePath)) ? compressFile(filePath, archivePath) : console.log(errorMessage);
};

await compress();
