import { mkdir, readdir, copyFile } from "fs/promises";

export const copy = async () => {
  const files = await readdir("./files").catch(() => {
    console.log(`FS operation failed`);
  });

  try {
    mkdir(`files_copy`, { recursive: false }).catch(() => {
      console.log(`FS operation failed`);
    });

    if (!files.length) {
      console.log(`FS operation failed`);
    } else {
      for (const file of files) {
        copyFile(`./files/${file}`, `./files_copy/${file}`);
      }
    }
  } catch (e) {
    console.error(`FS operation failed`);
  }
};
copy();
