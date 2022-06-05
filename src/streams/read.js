import fs, {constants} from 'fs';
import path from 'path';

const folder = 'src/streams/files';
const fileName = 'fileToRead.txt';

export const read = async () => {
    fs.access(path.join(folder, fileName), constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            const readStream = fs.createReadStream(path.join(folder, fileName));
            readStream.on('data',  (chunk) => {
                process.stdout.write(chunk.toString());
            });
        }
    });
};
read();