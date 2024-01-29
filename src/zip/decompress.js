import fs, { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

const decompress = async () => {
  const decompressFilePath = "./src/zip/files/fileToCompress.txt";
  const compressFilePath = "./src/zip/files/archive.gz";

  const isFileExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      return false;
    }
  };

  const decompressFile = async (path, archive) => {
    const stream = createReadStream(archive);
    stream
      .pipe(zlib.createGunzip())
      .pipe(createWriteStream(path))
      .on("finish", () => {
        console.log(`Decompression process done: ${path}`);
      });
  };

  (await isFileExist(compressFilePath)) ? decompressFile(decompressFilePath, compressFilePath) : console.log(errorMessage);
};

await decompress();
