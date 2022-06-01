import { mkdir, copyFile, readdir } from "fs/promises";

export const copy = async () => {
  const errMess = `FS operation failed`;
  let files = [];
  try {
    try {
      files = await readdir("./files");
    } catch (e) {
      if (e) {
        throw new Error(errMess);
      }
    }
    await mkdir(`files_copy`, { recursive: false }).catch((e) => {
      if (e) {
        throw new Error(errMess);
      }
    });
    try {
      for (const file of files) {
        copyFile(`./files/${file}`, `./files_copy/${file}`);
      }
    } catch (e) {
      throw new Error(errMess);
    }
  } catch (err) {
    const e = err;
    console.error(e.message);
  }
};
copy();
