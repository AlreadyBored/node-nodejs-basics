import fs, {constants} from 'fs';
import path from 'path';

const folder = 'src/streams/files';
const fileName = 'fileToWrite.txt';

export const write = async () => {
    fs.access(path.join(folder, fileName), constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            const writeStream = fs.createWriteStream(path.join(folder, fileName));
            process.stdin.on('data', (data) => {
                writeStream.write(data);
                process.exit(200);
            })
        }
    });

};
write();