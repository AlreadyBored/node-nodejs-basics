import fs from 'node:fs';

const create = async () => {
    try {
        const filename = "./src/fs/files/fresh.txt";
        if (fs.existsSync(filename)) {
            throw new Error("FS operation failed");
        }

        const usefullText = 'I am fresh and young';
        fs.writeFile(filename, usefullText, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }); 

      } catch (err) {
        throw new Error("FS operation failed");
      }};

await create();

