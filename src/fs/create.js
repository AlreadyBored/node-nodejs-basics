import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename)
const path = `${_dirname}/fresh.txt`;
const create = () => {
 if ( fs.existsSync(path)) {
        throw new Error('FS operation failed')
    } else {
        fs.appendFile(path, 'I am fresh and young', (err) => {
          if(err) throw err;    
          console.log(`file created in folder  ${_dirname}`); 
        })
    }
};

create();