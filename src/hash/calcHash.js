import { createHash } from "crypto";
import { readFileSync } from "fs";

const calculateHash = async () => {
    const buff = readFileSync("./src/hash/files/fileToCalculateHashFor.txt");
    const hash = createHash("sha256").update(buff).digest("hex");
    console.log(hash)
    return hash;
};

await calculateHash();