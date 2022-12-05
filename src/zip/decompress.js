import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'node:zlib';
import  { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import { access, constants} from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileAfterDecompress = path.dirname(__filename) + '/files/fileToCompress.txt';
const __fileToDecompress = path.dirname(__filename) + '/files/archive.gz';
const __errorMessage = 'ZIP operation failed';
const __errorFileNotExists = ': file archive.gz not exists';
const __errorFileExists = ': file fileToCompress.txt exists';

const decompress = async () => {
    try{
        const ifFileToDecompressExists = 
            await access(__fileToDecompress, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        const ifFileAfterDecompressExists = 
                await access(__fileAfterDecompress, constants.R_OK)
                    .then(value => true)
                    .catch(err => false);

        if(!ifFileToDecompressExists){
            throw Error(__errorMessage + __errorFileNotExists);
        }
            
        if(ifFileAfterDecompressExists){
            throw Error(__errorMessage + __errorFileExists);
        }

        const gunzip = createGunzip();
        const pipe = promisify(pipeline);
        const source = createReadStream(__fileToDecompress);
        const destination = createWriteStream(__fileAfterDecompress);

        await pipe(source, gunzip, destination);
    }catch(e){
        console.error(e.message);
    }
};

await decompress();