import path from "path";
import * as url from "url";
import { createHash } from "node:crypto";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const hash = await createHash("sha256").update(pathToFile).digest("hex");

    console.log(hash);
  } catch (err) {
    console.log(err);
  }
};

await calculateHash();
