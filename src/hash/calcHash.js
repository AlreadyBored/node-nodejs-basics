import { promises as fsPromises } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(modulePath, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const contents = await fsPromises.readFile(filePath, { encoding: "utf8" });
    const hexHash = createHash("sha256").update(contents).digest("hex");
    console.log(hexHash);
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
