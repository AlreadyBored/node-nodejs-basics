import { readdir } from "node:fs/promises";

export const list = async () => {
  const errMess = `FS operation failed`;
  let files = [];
  try {
    try {
      files = await readdir("./files");
      for (const file of files) {
        console.log(file);
      }
    } catch (e) {
      if (e) {
        throw new Error(errMess);
      }
    }
  } catch (err) {
    const e = err;
    console.error(e.message);
  }
};
list();
