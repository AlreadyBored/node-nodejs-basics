import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const list = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files");

  fs.readdir(fullPath, (err, files) => {
    if (err) throw new Error("FS operation failed");

    files.forEach((item) => {
      console.log(item);
    });
  });
};

await list();
