import fs from "fs";
import path from "path";

const targetFile = "fileToRead.txt";
const sourceFolder = "files";
const pathTotTargetFile = path.join(process.cwd(), sourceFolder, targetFile);

async function checkIsFileExist(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

const read = async () => {
  try {
    await checkIsFileExist(pathTotTargetFile);

    fs.readFile(pathTotTargetFile, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
