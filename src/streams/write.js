import fs from 'fs/promises';

const write = async () => {
    try {
        const fh = await fs.open('./files/fileToWrite.txt', 'a');
        const fstream = fh.createWriteStream();

        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
            fstream.write(input);
        });

        process.stdin.on('end', async () => {
            console.log('that\'s all folks!');
            await fh.close();
        });

        process.stdin.on('error', (error) => {
            console.log('failed to read inputL ', error);
        });

    } catch (error) {
        throw error;
    }
};

await write();