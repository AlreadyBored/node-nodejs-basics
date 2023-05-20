import { readFile } from "node:fs/promises";
const { createHash } = await import("node:crypto");
import path from "path";
const filePath = new URL("./files/fileToCalculateHashFor.txt", import.meta.url);

const calculateHash = async () => {
  // Write your code here
  const hash = createHash("sha256");

  try {
    const contents = await readFile(filePath);
    await hash.update(contents);
    console.log(
      `\u001B[35m${`${hash.digest("hex")} \u001B[42m${path.basename(
        filePath.pathname
      )}`}\u001B[0m`
    );
  } catch (err) {
    throw Error(`\u001B[31mHASH operation failed\u001B[0m ${err.message}`);
  }
};

await calculateHash();
