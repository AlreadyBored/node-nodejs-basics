import { createHmac } from "crypto";
import { readFile } from "fs/promises";
import { resolve } from "path";

const sourcePath = resolve("./src/hash/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const content = await readFile(sourcePath);
  const hash = createHmac("sha256", "abcdefg")
    .update(content)
    .digest("hex");
  console.log(hash);
};

await calculateHash();
