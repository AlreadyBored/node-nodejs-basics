import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import  { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import { access, constants} from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToCompress = path.dirname(__filename) + '/files/fileToCompress.txt';
const __fileAfterCompress = path.dirname(__filename) + '/files/archive.gz';
const __errorMessage = 'ZIP operation failed';
const __errorFileNotExists = ': file fileToCompress.txt not exists';
const __errorFileExists = ': file archive.gz exists';

const compress = async () => {
    try{
        const ifFileToCompressExists = 
            await access(__fileToCompress, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        const ifFileAfterCompressExists = 
                await access(__fileAfterCompress, constants.R_OK)
                    .then(value => true)
                    .catch(err => false);

        if(!ifFileToCompressExists){
            throw Error(__errorMessage + __errorFileNotExists);
        }

        if(ifFileAfterCompressExists){
            throw Error(__errorMessage + __errorFileExists);
        }

        const pipe = promisify(pipeline);
        const gzip = createGzip();
        const source = createReadStream(__fileToCompress);
        const destination = createWriteStream(__fileAfterCompress);

        await pipe(source, gzip, destination);
    }catch(e){
        console.error(e.message);
    }
};

await compress();