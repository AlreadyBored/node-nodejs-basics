import fs from "fs";
import path from "path";

const sourceFolder = "files";
const pathTotTargetFolder = path.join(process.cwd(), sourceFolder);

async function checkIsFolderExist(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function print(sourceFolder) {
  fs.readdir(sourceFolder, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach((file, index) => {
      console.log(file);
    });
  });
}

const list = async () => {
  await checkIsFolderExist(pathTotTargetFolder);
  print(sourceFolder);

  try {
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
