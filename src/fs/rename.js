import fs from 'fs';
import path from 'path';
import { errorMessage, fsFilePath } from '../common/constants.js';

export const rename = async () => {
   fs.rename(
       path.join(fsFilePath, 'files/wrongFilename.txt'),
       path.join(fsFilePath, 'files/properFilename.txt'),
       (err) => {
       if(err) throw new Error(errorMessage);
   })
};

rename()