import crypto from "crypto";
import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const calculateHash = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToCalculateHashFor.txt");

  fs.readFile(fullPath, "utf8", (err, contents) => {
    if (err) throw new Error("FS operation failed");
    const hash = crypto.createHash("sha256").update(contents);

    console.log(hash.digest("hex"));
  });
};

await calculateHash();
