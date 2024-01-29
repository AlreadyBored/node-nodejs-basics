import fs from "fs/promises";

const remove = async () => {
  let isFileExists = true;

  await fs
    .readFile("./files/fileToRemove.txt")
    .catch(() => (isFileExists = false));

  if (!isFileExists) throw new Error("FS operation failed");

  fs.rm("./files/fileToRemove.txt");
};

await remove();
