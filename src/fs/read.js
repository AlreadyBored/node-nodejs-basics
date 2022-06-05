import fs, {constants} from 'fs';
import path from 'path';

const folder = 'src/fs/files';
const fileName = 'fileToRead.txt';

export const read = async () => {
    fs.access(path.join(folder, fileName), constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            fs.readFile(path.join(folder, fileName), 'utf8', (err,data) => {
                if (err) {
                    throw new Error(err);
                }else{
                    console.log(data);
                }
              });
        }
    });
};
read();