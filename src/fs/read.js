import { existsSync, readdirSync, readFileSync } from 'node:fs';

const read = async () => {
    if (!existsSync('./src/fs/files/fileToRead.txt')) {
        console.log('FS operation failed');
    } else {
        const dir = await readdirSync('./src/fs/files');
        for (let i = 0; i < dir.length; i++) {
            if (dir[i] === 'fileToRead.txt') {
                const file = await readFileSync(`./src/fs/files/${dir[i]}`, 'utf8');
                console.log(file);
                return file;
            }
        }
    }
};

await read();