import fs from "node:fs/promises";
import path from "node:path";

// copy.js - implement function that copies folder files
// files with all its content into folder files_copy at the same level
// (if files folder doesn't exists or files_copy has already been created
// Error with message FS operation failed must be thrown)

const copy = async () => {
  // Write your code here

  const dir = path.resolve(process.cwd(), "src", "fs", "files");
  const dirPasteTo = path.resolve(process.cwd(), "src", "fs", "files_copy");

  try {
    await fs.mkdir(dirPasteTo);

    const files = await fs.readdir(dir);

    for (const file of files) {
      await fs.copyFile(
        path.resolve(dir, file),
        path.resolve(dirPasteTo, file),
        fs.constants.COPYFILE_EXCL
      );
    }
  } catch (error) {
    console.dir(error);
    throw new Error("FS operation failed");
  }
};

copy();
