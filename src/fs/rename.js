import * as fs from 'fs/promises';

export const rename = async () => {
    fs.rename('fs/files/wrongFilename.txt','fs/files/properFilename.md')
        .catch(() =>  console.log(new Error("\x1b[31m FS operation failed")));
};
rename()