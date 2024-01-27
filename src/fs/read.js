//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#file-system-srcfs

import fs from "node:fs";
import { getURLPath } from "../lib.js";

const read = async () => {
  const contentPath = getURLPath("./fs/files/fileToRead.txt");
  const stream = fs.createReadStream(contentPath, "utf-8");

  let data = "";
  try {
    for await (const chunk of stream) {
      data += chunk;
    }
    console.log(data);
  } catch (e) {
    if (e.code === "ENOENT") console.error("FS operation failed");
    else console.error(e.message);
  }
};

await read();
