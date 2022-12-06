import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

const copy = async () => {
    const dir = await readdirSync('./src/fs/files');
    if (!existsSync('./src/fs/files') || existsSync('./src/fs/files-copy')) {
        console.log('FS operation failed');
    } else {
        await mkdirSync('./src/fs/files-copy');
        for (let i = 0; i < dir.length; i++) {
            const file = await readFileSync(`./src/fs/files/${dir[i]}`, 'utf-8');
            await writeFileSync(`./src/fs/files-copy/${dir[i]}`, file, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }
};

copy();