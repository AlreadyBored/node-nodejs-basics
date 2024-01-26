import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * @param {string} filePath
 * @returns {Promise<string>}
 */

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const fileStream = fs.createReadStream(filePath);

    return new Promise((resolve, reject) => {
        fileStream.on('data', (data) => {
            hash.update(data);
        });

        fileStream.on('end', () => {
            const fileHash = hash.digest('hex');
            resolve(fileHash);
        });

        fileStream.on('error', (error) => {
            reject(error);
        });
    });
};

const folderPath = path.join(__dirname, '.', 'files');
const filePath = path.join(folderPath, 'fileToCalculateHashFor.txt');

calculateHash(filePath)
    .then((fileHash) => {
        console.log(`SHA256 hash for ${filePath}: ${fileHash}`);
    })
    .catch((error) => {
        console.error(`Error reading file: ${error.message}`);
    });

await calculateHash(filePath);