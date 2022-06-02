import path from "path";
import * as url from "url";
import * as crypto from "crypto";
import { promises as fs, createReadStream } from "fs";

export const calculateHash = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(
    _dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("sha256");
  const input = createReadStream(filePath);
  const result = await new Promise((resolve) => {
    input.on("readable", () => {
      const data = input.read();
      if (data) hash.update(data);
      else {
        resolve(hash.digest("hex"));
      }
    });
  });
  return result;
};
console.log(await calculateHash());
