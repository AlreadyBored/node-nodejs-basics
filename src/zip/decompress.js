import { existsSync, createReadStream, createWriteStream} from "fs";
import zlib from "zlib";

const FILE_PATH = './files/fileToCompress.txt';
const ZIP_FILE_NAME = './files/archive.gz';

const decompress = async () => {

     const exist = existsSync(ZIP_FILE_NAME);
     if(!exist) {
         return console.log('ERROR: ZIP_FILE_NAME does not exist');
     }

    createReadStream(ZIP_FILE_NAME)
        .pipe(zlib.createUnzip())
        .pipe(createWriteStream(FILE_PATH))
        .on('finish', () => console.log('DONE!'))
};

await decompress();
