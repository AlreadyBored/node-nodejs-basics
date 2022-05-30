import fs from 'fs';
import path from 'path';
const freshPath = path.resolve(path.dirname(''), 'src', 'fs', 'files', 'fresh.txt');

export const create = async () => {
    fs.access(freshPath, function (error) {
        if (error) {
            fs.writeFile(freshPath, "I am fresh and young", () => {});
        } else {
            try {
                throw new Error('FS operation failed');
            } catch (e) {
                console.log(e.message);
            }
        }
    });
};

create();