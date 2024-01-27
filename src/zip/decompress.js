import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
    const inputFilePath = path.join(__dirname, 'archive.gz')
    const outputFilePath = path.join(__dirname, 'fileToCompress.txt')

    // Create a readable stream from the input file
    const readStream = createReadStream(inputFilePath)

    // Create a Gunzip Transform Stream
    const gunzipStream = createGunzip()

    // Create a Writable Stream to the output file
    const writeStream = createWriteStream(outputFilePath)

    // Pipe the data through the Gzip stream and then to the output file
    readStream.pipe(gunzipStream).pipe(writeStream)

    readStream.on('error', (err) => {
        console.error('Error reading file:', err)
    })

    writeStream.on('finish', () => {
        console.log(`File decompressed successfully`)
    })

    writeStream.on('error', (err) => {
        console.error('Error writing compressed file:', err)
    })
};

await decompress();