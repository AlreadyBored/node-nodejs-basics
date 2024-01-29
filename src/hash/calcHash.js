import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from "path";

const calculateHash = async () => {
    const filePath = new URL(path.resolve('./files/fileToCalculateHashFor.txt'), import.meta.url).pathname;
    try {
        const data = await readFile(filePath);
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(`SHA256 hash of ${filePath}: ${hash}`);
    } catch (error) {
        throw new Error('FS operation failed: unable to read fileToCalculateHashFor.txt');
    }
};

await calculateHash();