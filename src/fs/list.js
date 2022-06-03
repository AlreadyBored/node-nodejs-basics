import { readdir } from "node:fs/promises";
import fs from "fs";
export const list = async () => {
  try {
    fs.access("./files", function (err) {
      if (err && err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
    });
    const files = await readdir("./files", (err) => {
      if (err) throw new Error("FS operation failed");
    });
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    console.log(e);
  }
};
list();
