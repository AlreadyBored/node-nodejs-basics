import fs from 'fs';
import path from 'path';
import  {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {
    const writableStream = await fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(writableStream);

    writableStream.on('error', (err) => {
        console.error('Error writing to file:', err);
    });

    writableStream.on('finish', () => {
        console.log('Данные успешно записаны в файл.');
    });

    process.stdin.on('end', () => {
        writableStream.end();
    });

};

await write();