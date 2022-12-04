import { existsSync, mkdirSync, readdirSync, copyFile } from 'fs';

const copy = async (dir) => {

    const src = dir;
    const dest = `${src}_copy`;

    try {
        if (!existsSync(src) || existsSync(dest)) {
            throw 'FS operation failed';
        }
        mkdirSync(dest);
        readdirSync(src).forEach(file => {
            copyFile(`${src}/${file}`, `${dest}/${file}`, (err) => {
                if (err) throw err;

            });
        });

    } catch (err) {
        console.error(err);
    }
};

await copy('./files');
