import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream, unlink } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const decompress = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const compressedFile = join(dirName, "files", "archive.gz");
  const decompressedFile = join(dirName, "files", "fileToCompress.txt");
  const gunzip = createGunzip();
  const source = createReadStream(compressedFile);
  const destination = createWriteStream(decompressedFile);

  try {
    await new Promise((resolve, reject) => {
      pipeline(source, gunzip, destination, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    console.log("File decompressed successfully!");

    unlink(compressedFile, (error) => {
      if (error) {
        console.error("Error deleting the source file:", error.message);
      } else {
        console.log("Source file deleted successfully!");
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};
await decompress();
