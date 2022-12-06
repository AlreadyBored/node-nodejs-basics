import { readdirSync, renameSync, existsSync } from 'node:fs';

const rename = async () => {
    if (!existsSync('./src/fs/files/wrongFilename.txt') || existsSync('./src/fs/files/properFilename.md')) {
        console.log('FS operation failed');
    } else {
        const dir = await readdirSync('./src/fs/files');
        for (let i = 0; i < dir.length; i++) {
            if (dir[i] === 'wrongFilename.txt') {
                await renameSync(`./src/fs/files/${dir[i]}`, `./src/fs/files/properFilename.md`);
            }
        }
    }
};

await rename();