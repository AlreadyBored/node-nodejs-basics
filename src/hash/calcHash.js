import fs from "node:fs/promises";
import crypto from "node:crypto";
import { joinToURL } from "../helpers.js";

const calculateHash = async () => {
  const fileContent = await fs.readFile(
    joinToURL(import.meta.url, "files", "fileToCalculateHashFor.txt"),
    "utf-8"
  );
  const hash = crypto.createHash("sha256");
  hash.update(fileContent);

  console.log(hash.digest("hex"));
};

await calculateHash();
