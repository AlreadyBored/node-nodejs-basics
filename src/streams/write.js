import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const rs = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
    const ws = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);


    rs.on("data", (data) => {
        console.log("New chunq Recieved");
        ws.write(data);
    });
};

write();
