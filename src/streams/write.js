import { createWriteStream } from 'fs';
import { createInterface } from 'readline';

const write = async () => {
    const filePath = './src/streams/files/fileToWrite.txt';
    const writableStream = createWriteStream(filePath);

    writableStream.on('error',  (error) => {
        console.log(`An error occured while writing to the file. Error: ${error.message}`);
    });

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Enter a sentence: '
    });
    rl.prompt();
    let sentence;
    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                rl.close();
                break;
            default:
                sentence = line + '\n'
                writableStream.write(sentence);
                rl.prompt();
                break;
        }
    }).on('close', () => {
        writableStream.end();
        writableStream.on('finish', () => {
            console.log(`All your sentences have been written to ${filePath}`);
        })
        setTimeout(() => {
            process.exit(0);
        }, 100);
    });
};

await write();