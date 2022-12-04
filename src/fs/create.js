import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const create = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fresh.txt");

  fs.writeFile(fullPath, "I am fresh and young", { flag: "wx" }, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await create();
