import fs from 'fs';
import {constants} from 'fs';

const file = 'src/fs/files/fresh.txt';
const data = 'I am fresh and young';

export const create = async () => {
    
    fs.access(file, constants.F_OK, (err) => {
        if (err){
            fs.writeFile(file, data, 'utf8', (err) => {
                if (err) throw new Error(err);
                
              })
        }else{
            throw new Error('FS operation failed');
        }
      });
};
create();