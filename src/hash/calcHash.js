//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#hash-srchash

import fs from "node:fs";
import { createHash } from "node:crypto";
import { getURLPath } from "../lib.js";

const calculateHash = async () => {
  const filePath = getURLPath("./hash/files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const stream = fs.createReadStream(filePath, "utf-8");

  let data = "";
  try {
    for await (const chunk of stream) {
      data += chunk;
    }
    data = hash.update(data, "utf-8").digest("hex");
    console.log("SHA256 hash ----->", data);
  } catch (e) {
    console.error(e.message);
  }
};

await calculateHash();
