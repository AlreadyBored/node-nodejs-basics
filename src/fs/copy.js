import { cp } from "fs";
import path from "path";

const fileUrl = "./src/fs";
const sourceFolder = path.join(fileUrl, "files");
const copyFolder = path.join(fileUrl, "files_copy");

const copy = async () => {
  cp(sourceFolder, copyFolder, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await copy();
