import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import process from 'node:process';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

const DIR_NAME = 'files';
const INPUT_FILE_NAME = 'archive.gz';
const OUTPUT_FILE_NAME = 'fileToCompress.txt';

const decompress = async () => {
    const inputFilePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, INPUT_FILE_NAME);
    const outputFilePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, OUTPUT_FILE_NAME);

    const gunzip = createGunzip();
    const source = createReadStream(inputFilePath);
    const destination = createWriteStream(outputFilePath);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();
