import { createReadStream } from 'node:fs';
import { dirname ,join} from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const read = async () => {
    const targetFile = join(__dirname,'/files/fileToRead.txt');
    const stream = createReadStream(targetFile);


    stream.on('data', (chunk) =>{
        process.stdout.write(chunk);
    })


};

await read();