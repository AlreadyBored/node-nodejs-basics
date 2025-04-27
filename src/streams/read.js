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
    // npm does not flush if new line is missing in the content, adding new line fix this
    process.stdout.write(txt + '\n');    
};

await read();