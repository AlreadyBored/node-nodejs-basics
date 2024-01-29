import fs, {constants} from 'fs';
import zlib from 'zlib';
import {fileURLToPath} from "url";
import path from "node:path";
import {access, writeFile} from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFileExists = async (filePath) => {
    return await access(filePath, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

const decompress = async () => {
    const filePath = path.join(__dirname,'files','fileToCompress.txt')
    const compressedFilePath = path.join(__dirname,'files','archive.gz')

    if(!(await checkFileExists(filePath))) {
        await writeFile(filePath,'','utf-8')
    }

    const readStream = fs.createReadStream(compressedFilePath)
    const writeStream = fs.createWriteStream(filePath)
    const gunzipStream = zlib.createGunzip()

    readStream.pipe(gunzipStream).pipe(writeStream)

    writeStream.on('finish', ()=> {
        console.log('file was decompressed')
    })
    writeStream.on('error', (err) => {
        console.error(err.message)
    })
};

await decompress();
