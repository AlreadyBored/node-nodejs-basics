import { readFile } from "node:fs/promises";
//dynamic import
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const src = "src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");
  const digestFormat = "hex";

  try {
    const content = await readFile(src);
    hash.update(content);
    console.log(hash.digest(digestFormat));
  } catch (err) {
    console.log(err);
  }
};

await calculateHash();
