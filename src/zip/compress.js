import {createReadStream, createWriteStream, existsSync} from 'fs';
import zlib from 'zlib';

const FILE_PATH = './files/fileToCompress.txt';
const ZIP_FILE_NAME = './files/archive.gz';

const compress = async () => {

    const exist = existsSync(FILE_PATH);

    if (!exist) {
        return console.log('ERROR: could not find file');
    }

    createReadStream(FILE_PATH)
        .pipe(zlib.createGzip())
        .pipe(createWriteStream(ZIP_FILE_NAME))
        .on('finish', () => {
            console.log('DONE!')
        })
};

await compress();
