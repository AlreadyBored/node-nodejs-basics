import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFileForRead = __dirname + "/files/fileToCalculateHashFor.txt";

  const data = await readFile(pathFileForRead, { encoding: "utf8" });
  const { createHash } = await import("crypto");

  let res = await createHash("sha256").update(data).digest("hex");
  return res;
};

console.log(await calculateHash());
