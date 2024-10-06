import crypto from 'crypto'
import fs from 'fs';
import asyncFs from "fs/promises";
import path from "path";
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = () => {
    const filepath = path.join(__dirname,'files','fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const readableStream = fs.createReadStream(filepath, {encoding:'utf-8'});

    readableStream.on('data', (chunk) => {
        hash.update(chunk);
    })
    readableStream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
    });
    readableStream.on('error', (err) => {
        console.error('Error reading file:', err);
    });
};

calculateHash();