import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const data = await readFile("./src/hash/files/fileToCalculateHashFor.txt", {
    encoding: "utf8",
  });
  hash.update(data);
  console.log(hash.digest("hex"));
};

await calculateHash();