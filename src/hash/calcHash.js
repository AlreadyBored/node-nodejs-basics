import path from "path";
import fs from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const filePath = path.resolve(
    __dirname,
    "./files",
    "fileToCalculateHashFor.txt"
  );

  fs.readFile(filePath, "utf-8", (error, data) => {
    if (data) {
      console.log(createHash("sha256").update(data).digest("hex"));
    } else return false;
  });
};

await calculateHash();
