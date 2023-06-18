import fs from "fs";
import {
    createHash
} from "crypto";

const calculateHash = async () => {
    // Write your code here
    // Create hash instance with sha256 algorithm
    const hash = createHash('sha256');
    const file = fs.readFileSync('./files/fileToCalculateHashFor.txt')

    // Input buffer in hash instance
    hash.update(file);

    // Compute hash digests of data and logging it
    console.log(hash.digest('hex'));};

await calculateHash();