import { createWriteStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    const filePath = join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    
    console.log('Enter text to write to file. Type "exit" on a new line to finish:');
    
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        if (line.trim().toLowerCase() === 'exit') {
            rl.close();
            writeStream.end();
            return;
        }
        writeStream.write(line + '\n');
    });

    writeStream.on('error', (error) => {
        console.error('Error writing to file:', error.message);
        rl.close();
    });

    writeStream.on('finish', () => {
        console.log('Writing completed. Content has been saved to fileToWrite.txt');
        process.exit(0);
    });
};

await write();
