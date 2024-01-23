import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream, unlink } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const compress = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  console.log(dirName);
  const currFile = join(dirName, "files", "fileToCompress.txt");
  const compressedFile = join(dirName, "files", "archive.gz");
  const gzip = createGzip();
  const source = createReadStream(currFile);
  const destination = createWriteStream(compressedFile);
  try {
    await new Promise((resolve, reject) => {
      pipeline(source, gzip, destination, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    console.log("File compressed successfully!");

    unlink(currFile, (error) => {
      if (error) {
        console.error("Error deleting the source file:", error.message);
      } else {
        console.log("Source file deleted successfully!");
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
  // Write your code here
};

await compress();
