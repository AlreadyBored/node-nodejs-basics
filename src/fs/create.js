import fs from 'fs';
import path from 'path';
import { errorMessage, fsFilePath } from '../common/constants.js';

export const create = async () => {
    const fileContent = 'I am fresh and young';

    fs.writeFile(
        path.join(fsFilePath, 'files/fresh.txt'),
        fileContent,
        {flag: 'wx'},
        (err) => {
          if(err) throw new Error(errorMessage);
    })
};

create()