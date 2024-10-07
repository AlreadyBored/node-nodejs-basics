import { createHash, createHash as cryptoCreateHash } from 'crypto';
import { readFile as fsReadFile } from 'fs/promises';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const filePath = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const fileFullPath = pathJoin(__dirname, filePath, fileName);

const calculateHash = async () => {
    const content = await fsReadFile(fileFullPath);
    const hashDataSrc = createHash('sha256').update(content);
    const hashDataHex = hashDataSrc.digest('hex');
    console.log(hashDataHex);
    return hashDataHex;
}

await calculateHash();