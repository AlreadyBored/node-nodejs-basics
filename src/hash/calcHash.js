import crypto from 'crypto';
import {readFile} from "fs/promises";
import * as fs from "node:fs";

const calculateHash = async () => {
    const path = 'src/hash/files/fileToCalculateHashFor.txt';
    const text = await readFile(path, 'utf-8');
    const hash = crypto.createHash('sha256').update(text).digest('hex');
    const stream = fs.createReadStream(path);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
    });

    stream.on('error', (err) => {
        console.error('Ошибка при чтении файла:', err);
    });
};

await calculateHash();
