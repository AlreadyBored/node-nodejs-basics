import fs from "node:fs";
import { constants, cp } from "node:fs/promises";

const copy = async () => {
  const filesName = "./src/fs/files";
  const copyName = "./src/fs/files_copy";

  if (!fs.existsSync(filesName) || fs.existsSync(copyName)) {
    throw new Error("FS operation failed");
  }

  try {
    await cp(filesName, copyName, {
      mode: constants.COPYFILE_EXCL,
      recursive: true,
    });
  } catch (error) {
    console.error(error);
  }
};

await copy();
