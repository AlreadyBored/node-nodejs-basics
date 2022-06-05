import fs from "fs";
import path from "path";
const __dirname = path.resolve();

export const create = async () => {
    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young',
        (err) => {
            if (err) console.log('FS operation failed', err.message, err.stack);
            console.log('Файл был создан');
        }
    );
};

create();

