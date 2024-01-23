// Implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import fsPromises from "node:fs/promises";
import { getURLPath } from "./lib.js";

const copy = async () => {
  const srcFolderPath = getURLPath("./files");
  const destFolderPath = getURLPath("./files_copy");

  let isExistSourceFolder = false;
  let isExistDestinationFolder = false;
  try {
    const [srcFolder, destFolder] = await Promise.allSettled([
      fsPromises.access(srcFolderPath),
      fsPromises.access(destFolderPath),
    ]);

    isExistSourceFolder = srcFolder.status === "fulfilled";
    isExistDestinationFolder = destFolder.status === "fulfilled";

    if (isExistSourceFolder && !isExistDestinationFolder) {
      try {
        await fsPromises.cp(srcFolderPath, destFolderPath, {
          recursive: true,
        });
      } catch (e) {
        console.error(e.message);
      }
    } else {
      throw new Error("FS operation failed");
    }
  } catch (e) {
    console.error(e.message);
  }
};

await copy();
