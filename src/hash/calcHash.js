//You should implement several functions in dedicated files. Implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
import fs from "node:fs";
import { createHash } from "node:crypto";
import { getURLPath } from "../lib.js";

const calculateHash = async () => {
  const filePath = getURLPath("./hash/files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const stream = fs.createReadStream(filePath).setEncoding("utf-8");

  let data = "";
  stream.on("data", (chunk) => {
    data += chunk;
  });

  stream.on("error", (e) => {
    console.error(e.message);
  });

  stream.on("end", () => {
    data = hash.update(data, "utf-8").digest("hex");
    console.log("SHA256 hash ----->", data);
  });
};

await calculateHash();
