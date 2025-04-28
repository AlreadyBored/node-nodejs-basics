import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(filePath, { flags: 'a' });

    console.log('Enter text to write to the file (press "Ctrl+C" to finish):');
    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    process.on('SIGINT', () => {

        writeStream.end(() => {
            console.log('\n--- Finish ---');
            process.exit(0);
        });
});

    writeStream.on('error', (error) => {
        console.error('Error:', error.message);
    });
};

await write();