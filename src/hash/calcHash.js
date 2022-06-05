import crypto from 'crypto';
import fs, {constants} from 'fs';
import path from 'path';

const folder = 'src/hash/files';
const fileName = 'fileToCalculateHashFor.txt';

export const calculateHash = async () => {
    fs.access(path.join(folder, fileName), constants.F_OK, (err) => {
        if (err){
            throw new Error('FS operation failed');
        }else{
            fs.readFile(path.join(folder, fileName), 'utf8', (err,data) => {
                if (err) {
                    throw new Error(err);
                }else{
                    const hashSum = crypto.createHash('sha256');
                    hashSum.update(data);
                    const hex = hashSum.digest('hex');
                    console.log(hex);
                }
              });
        }
    });
};
calculateHash();