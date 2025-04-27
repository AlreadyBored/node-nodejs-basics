const read = async () => {
    // Write your code here 
    const { createReadStream } = await import('node:fs');

    let txt = '';
    const readStream = createReadStream('./src/streams/files/fileToRead.txt', { encoding: 'utf-8' })
    try {
        for await (const chunk of readStream) {
            txt += chunk
        }
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }

    process.stdout.write(txt)
};

await read();