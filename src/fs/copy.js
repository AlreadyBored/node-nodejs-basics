import fs from "fs";
import path from "path";

import { getDirname } from "../helpers/getDirname.js";

const copy = async () => {
  const __dirname = getDirname(import.meta.url);
  const coursePath = path.join(__dirname, "/files");
  const destinationPath = path.join(__dirname, "/files_copy");

  fs.cp(
    coursePath,
    destinationPath,
    { recursive: true, errorOnExist: true, force: false },
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

copy();
