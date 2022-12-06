import { writeFileSync, existsSync } from 'node:fs';

const create = async () => {
    const isFileExists = await existsSync('fresh.txt');
    if (isFileExists) {
        console.log('FS operation failed');
        return;
    } else {
        await writeFileSync('fresh.txt', 'I am fresh and young', (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};

await create();