import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { unlink } from "fs/promises";

const file = './files/fileToCompress.txt'
const archive = './files/archive.gz'

const decompress = async () => {
    const readStream = createReadStream(archive)
    const writeStream = createWriteStream(file)
    const gunzip = createUnzip()

    pipeline(readStream, gunzip, writeStream, (err) => {
        if (!err) {
            unlink(archive)
        }
    })
};

await decompress();