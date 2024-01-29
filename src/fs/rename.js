import fs from "fs/promises";

const rename = async () => {
  let isFileCreated = true;
  let isFileNotExist = false;

  await fs
    .readFile("./files/wrongFilename.txt")
    .catch(() => (isFileNotExist = true));

  await fs
    .readFile("./files/properFilename.md")
    .catch(() => (isFileCreated = false));

  if (!isFileNotExist && !isFileCreated)
    fs.rename("./files/wrongFilename.txt", "./files/properFilename.md");
  else throw new Error("FS operation failed");
};

await rename();
