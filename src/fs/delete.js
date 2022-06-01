import { rm } from "node:fs/promises";

export const remove = async () => {
  const path = "./files/fileToRemove.txt";
  const errMess = "FS operation failed";
  try {
    rm(path).catch((e) => {
      if (e.code === "ENOENT") {
        throw new Error(errMess);
      }
    });
  } catch (err) {
    const error = err;
    console.error(error.message);
  }
};
remove();
