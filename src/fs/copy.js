import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const dirPath = path.join(__dirname, 'files');
    const destinationDirPath = path.join(__dirname, 'files_copy');
    const files = fs.readdirSync(dirPath)

    if(!fs.existsSync(dirPath) || fs.existsSync(destinationDirPath)){
        throw new Error('FS operation failed')
    }

    fs.mkdirSync(destinationDirPath);

    files.forEach(file =>{
        fs.writeFile(path.join(destinationDirPath, file), fs.readFileSync(path.join(dirPath, file), 'utf8') ,err => {
            if (err) {
                console.error(err);
            }
        });
    })

};

await copy();
