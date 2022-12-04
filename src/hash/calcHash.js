import { readFile } from "fs/promises";
import { createHash } from "crypto";

import { getPath } from "./../fs/utils/fs.js";

const path = getPath("hash", "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const content = await readFile(path, { encoding: "utf8" });
    const hash = createHash("sha256").update(content).digest("hex");
    console.log(hash);
};

await calculateHash();
