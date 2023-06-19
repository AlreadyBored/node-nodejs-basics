import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHmac } from "node:crypto";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const folderPath = join(__dirname, "files");
  const filePath = join(folderPath, "fileToCalculateHashFor.txt");

  try {
    let contents = await readFile(filePath, { encoding: "utf8" });
    const secret = "abcdefg";
    const hash = createHmac("sha256", secret).update(contents).digest("hex");
    console.log(hash);
  } catch (error) {
    throw error;
  }
};

await calculateHash();
