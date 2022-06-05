import fs from 'fs';
export const rename = async () => {
    
    await fs.exists('files/wrongFilename.txt', (exists) => {
        console.log(exists ? 'WrongFilename.txt:Found' : 'wrongFilename.txt:Not Found!');
      });

     await fs.exists('files/properFilename.md', (exists) => {
        console.log(exists ? 'ProperFilename.md:Found' : 'ProperFilename.md:Not Found!');
      });

};

rename()