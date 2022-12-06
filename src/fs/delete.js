import { unlinkSync, existsSync, readdirSync } from 'node:fs';

const remove = async () => {
    if (!existsSync('./src/fs/files/fileToRemove.txt')) {
        console.log('FS operation failed');
    } else {
        const dir = await readdirSync('./src/fs/files');
        for (let i = 0; i < dir.length; i++) {
            if (dir[i] === 'fileToRemove.txt') {
                await unlinkSync('./src/fs/files/fileToRemove.txt');
            }
        }
    }
};

await remove();