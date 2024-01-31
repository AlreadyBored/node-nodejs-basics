import { createHash } from "crypto";
import { createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFile = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt")

  const hash = createHash("sha256");
  const fileStream = createReadStream(pathToFile);

  fileStream.on("error", (err) => console.error("File Stream Error:", err));
  hash.on("error", (err) => console.error("Hash Stream Error:", err));

  fileStream.pipe(hash);

  const chunks = [];
  hash.on("data", (chunk) => chunks.push(chunk));

  hash.on("end", () => {
    const result = Buffer.concat(chunks).toString("hex");
    console.log(result);
  });
};

await calculateHash();
