import { createHash } from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const hash = createHash("sha256", "MySecret");

  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const filename = path.join(dir, "files", "fileToCalculateHashFor.txt");
  const input = fs.createReadStream(filename);
  input.on("readable", () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();
