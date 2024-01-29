import crypto from "crypto";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const input = fs.createReadStream(
    join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  input.on("readable", () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();
