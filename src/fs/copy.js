import { cp } from "node:fs/promises";

const __dirname = import.meta.dirname;

const copy = async () => {
  try {
    await cp(__dirname + "/files/", __dirname + "/files_copy/", {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
