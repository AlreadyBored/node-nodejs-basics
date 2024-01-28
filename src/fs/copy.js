import fs from "fs";
import path from "path";

const sourceFolder = path.join(process.cwd(), "files");
const destinationFolder = path.join(process.cwd(), "files_copy");

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

async function createFolder(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function copyFile(source, destination) {
  const sourceStream = fs.createReadStream(source);
  const destinationStream = fs.createWriteStream(destination);

  sourceStream.on("error", (err) => {
    console.log(err);
  });

  destinationStream.on("error", (err) => {
    console.log(err);
  });

  sourceStream.pipe(destinationStream);
}

function copyFilesInFolder(sourceFolder, destinationFolder) {
  fs.readdir(sourceFolder, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    files.forEach((file, index) => {
      const sourceFilePath = path.join(sourceFolder, file);
      const destinationFilePath = path.join(destinationFolder, file);
      copyFile(sourceFilePath, destinationFilePath);
    });
  });
}

const copy = async () => {
  try {
    await checkIsFolderExist(sourceFolder);
    await createFolder(destinationFolder);

    copyFilesInFolder(sourceFolder, destinationFolder);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
