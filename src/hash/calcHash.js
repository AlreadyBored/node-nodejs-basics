import crypto from "node:crypto";
import { open } from "node:fs/promises";

export const calculateHash = async () => {
  let fd = await open("./hash/files/fileToCalculateHashFor.txt");
  let hash = crypto.createHash("sha256").setEncoding("hex");
  
  fd.createReadStream({ encoding: "utf8" }).pipe(hash);
  hash.on("data", (data) => {
    console.log(data);
  });
  hash.on("end", (data) => {
    return data;
  });
};

console.log( calculateHash());
