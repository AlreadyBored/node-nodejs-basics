// var fs = require('fs');
import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, '/files')
export const create = async () => {
  
    if (fs.existsSync(dirPath + '/fresh.txt')) {
        const error = new Error('FS operation failed');
        return error;
    }
    else {
      fs.writeFile(dirPath +  '/fresh.txt', 'I am fresh and young', function (err) {
        if (err) throw err;
      });
    }
};

create();