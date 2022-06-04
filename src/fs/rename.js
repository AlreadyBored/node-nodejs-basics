import fs from 'fs'
export const rename = async () => {
   fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
       if(err) throw new Error('Failed rename')
   })
};

rename()