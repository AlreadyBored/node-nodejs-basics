import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createReadStream } from "fs";
import { createHash } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const file = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const rs = createReadStream(file);
  const hash = createHash("sha256");
  rs.on("error", (err) => err);
  rs.on("data", (chunk) => hash.update(chunk));
  rs.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
