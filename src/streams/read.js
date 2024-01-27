//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#streams-srcstreams

import fs from "node:fs";
import { getURLPath } from "../lib.js";

const read = async () => {
  const fileToRead = getURLPath("./streams/files/fileToRead.txt");
  const stream = fs.createReadStream(fileToRead, "utf-8");

  let data = "";
  try {
    for await (const chunk of stream) {
      data += chunk;
    }
    process.stdout.write(`${data}\n`);
  } catch (e) {
    console.error(e.message);
  }
};

await read();
