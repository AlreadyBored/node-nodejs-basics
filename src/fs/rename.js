import { existsSync, rename as renameFile } from 'fs';
import { resolve } from 'path';

const rename = async () => {
    const wrongFilenamePath = resolve('files', 'wrongFilename.txt');
    const properFilenamePath = resolve('files', 'wrongFilename.txt');

    if (existsSync(wrongFilenamePath) && !existsSync(properFilenamePath)) {
        await renameFile(wrongFilenamePath, properFilenamePath, (err) => {
            if (err) {
                throw new Error('Fs operation failed');
            };
            console.log('Renamed complete');
        });
    } else  {
        throw new Error('Fs operation failed');
    };
};

await rename();