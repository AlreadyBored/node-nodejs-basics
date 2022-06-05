import fs, {constants} from 'fs';
import path from 'path';

const folder = 'src/fs/files';
const fileName = 'fileToRemove.txt';

export const remove = async () => {
    fs.access(path.join(folder, fileName), constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            fs.rm(path.join(folder, fileName), (err) => {
                if (err) throw new Error(err);
              });
        }
    });
};
remove();