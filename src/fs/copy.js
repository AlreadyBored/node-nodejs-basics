import {readdir, mkdir, readFile, writeFile} from 'node:fs/promises';

const copy = async () => {
    // Write your code here 
    try {
        const sourceFolder = './src/fs/files';
        const destFolder = './src/fs/files_copy';

        const files = await readdir(sourceFolder);
        await mkdir(destFolder);
      
        for await (const file of files) {
            const data = await readFile(sourceFolder + '/' + file);
            await writeFile(destFolder + '/' + file, data)
        }
        
    } catch (error) {
        console.log('FS operation failed');
    }
};

await copy();
