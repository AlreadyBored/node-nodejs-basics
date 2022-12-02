import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';


const create = async () => {
    const pathFiles = path.dirname(fileURLToPath(import.meta.url)) + '/files/';

    const fileName = pathFiles + 'fresh.txt';
    const fileContent = 'I am fresh and young';

    if (fs.existsSync(fileName)) {
        console.log('FS operation failed');
        throw 'FS operation failed';
    }

    fs.writeFile(fileName, fileContent, function(error){
        if(error) throw 'FS operation failed';
    });
};

await create();