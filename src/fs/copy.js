//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#file-system-srcfs

import fsPromises from "node:fs/promises";
import { getURLPath } from "../lib.js";

const copy = async () => {
  const srcFolderPath = getURLPath("./fs/files");
  const destFolderPath = getURLPath("./fs/files_copy");

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
