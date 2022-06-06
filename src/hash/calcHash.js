import * as crypto from "crypto";
import * as fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, folderName, 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    try {
        const fileBuffer = fs.readFileSync(pathToFile);
        const hash = crypto.createHash('SHA256');
        const fileHash = hash.update(fileBuffer).digest('hex');
        console.log(fileHash);
    } catch (err) {
        // error handling
    }
};

calculateHash();