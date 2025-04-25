import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  // Write your code here'
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(
    __dirname,
    "./files/fileToCalculateHashFor.txt"
  );
  const hash = createHash("sha256");
  const input = createReadStream(fileName);

  input.on("readable", () => {
    const data = input.read();

    if (data) {
      hash.update(data);
    } else {
      console.log(`File hash: ${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
