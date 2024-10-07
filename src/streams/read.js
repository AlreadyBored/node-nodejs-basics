import fs from 'fs/promises';

const read = async () => {
    let fh;
    try {
        fh = await fs.open('./files/fileToRead.txt');
        const fstream = fh.createReadStream();
        fstream.on("data", (chunk) => {
            process.stdout.write(`${chunk}\n`);
        });
        fstream.on("end", async () => {
            process.stdout.end();
            await fh.close();         
        });

    } catch (error) {
        throw error;
    }
};

await read();