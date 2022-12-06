import { existsSync, readdirSync, readFileSync } from 'node:fs';
const list = async () => {
    if (!existsSync('./src/fs/files')) {
        console.log('FS operation failed');
    } else {
        const dir = await readdirSync('./src/fs/files');
        const fileNames = [];
        for (let i = 0; i < dir.length; i++) {
            fileNames.push(dir[i].split('.')[0]);
        }
        console.log(fileNames);
        return fileNames;
    }
};

await list();