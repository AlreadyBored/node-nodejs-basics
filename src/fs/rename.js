import fs, {constants} from 'fs';
import path from 'path';

const folder = 'src/fs/files';

const wrongName = 'wrongFilename.txt';
const properName = 'properFilename.md';


export const rename = async () => {
    fs.access(path.join(folder, wrongName), constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            fs.access(path.join(folder, properName), constants.F_OK, (err) => {
                if (err){
                    fs.rename(path.join(folder, wrongName), path.join(folder, properName), (err) => {
                        if (err) throw new Error(err);
                      });
                }else{
                    throw new Error('FS operation failed');
                }
            });
        }
    });
};
rename();