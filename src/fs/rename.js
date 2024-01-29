import fs from "node:fs";

function doesFileExist(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);

    return true;
  } catch (error) {
    return false;
  }
}

const rename = async () => {
  const wrongName = "./src/fs/files/wrongFilename.txt";
  const properName = "./src/fs/files/properFilename.txt";

  if (!doesFileExist(wrongName) || doesFileExist(properName)) {
    throw new Error("FS operation failed");
  }

  fs.rename(wrongName, properName, (error) => {
    console.error(error);
  });
};

await rename();
