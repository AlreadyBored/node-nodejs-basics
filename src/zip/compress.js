import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import process from 'node:process';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

const DIR_NAME = 'files';
const INPUT_FILE_NAME = 'fileToCompress.txt';
const OUTPUT_FILE_NAME = 'archive.gz';

const compress = async () => {
    const inputFilePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, INPUT_FILE_NAME);
    const outputFilePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, OUTPUT_FILE_NAME);

    const gzip = createGzip();
    const source = createReadStream(inputFilePath);
    const destination = createWriteStream(outputFilePath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();
