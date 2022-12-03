import fs from "fs";
import path from "path";

import { getDirname } from "../helpers/getDirname.js";

const create = async () => {
  const __dirname = getDirname(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fresh.txt");

  fs.writeFile(fullPath, "I am fresh and young", { flag: "wx" }, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await create();
