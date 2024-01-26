import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "node:fs/promises";

async function createFolder(where) {
  try {
    await fs.mkdir(where, { recursive: true });
  } catch (err) {
    // catch errors that happen during the creation folder.
    throw new Error("FS operation failed");
  }
}
async function isExistFolder(where) {
  try {
    //check do we have the destinationFolder, if have throw error.
    await fs.access(where, fs.constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    // if we don't have destinationFolder, create it.
    return;
  }
}
const copy = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  //Folder for copy
  const copyFolder = path.join(__dirname, "files");
  const destinationFolder = path.join(__dirname, "files_copy");

  try {
    await fs.access(copyFolder, fs.constants.F_OK);
    const files = await readdir(copyFolder);
    await isExistFolder(destinationFolder);
    await createFolder(destinationFolder);

    for (let file of files) {
      //copy files(not folders), for folders need implement other logic.
      await fs
        .copyFile(
          path.join(copyFolder, file),
          path.join(destinationFolder, file)
        )
        .catch((err) => {
          // catch error that can happen during copy.
          throw new Error("FS operation failed");
        });
    }
  } catch (err) {
    //catch errors that can happen during access and other FS operations.
    throw new Error("FS operation failed");
  }
};

await copy();
