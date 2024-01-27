import * as fs from "node:fs/promises";
import { folderPath } from "./create.js";

const parentalFolderPath = import.meta.dirname;

const list = async () => {
  try {
    const targetFiles = await fs.readdir(folderPath);
    const files = await fs.readdir(parentalFolderPath);
    if (files.includes("files")) {
      console.log(targetFiles);
    } else {
      console.log("FS opertaion failed");
    }
  } catch (error) {}
};

await list();
