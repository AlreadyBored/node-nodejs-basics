import fs from "node:fs/promises";
import path from "path";

const { createHash } = await import("node:crypto");
const filePath = path.resolve("src/hash/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const hash = createHash("sha256");
    const hashFile = await fs.readFile(filePath).then((res) => hash.update(res).digest("hex"));

    console.log(hashFile);
};

await calculateHash();
