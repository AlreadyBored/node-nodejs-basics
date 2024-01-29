const read = async () => {
    try {
        const {
            createReadStream
        } = await import('fs');
        const filePath = './files/fileToRead.txt';

        const readStream = createReadStream(filePath, {
            encoding: 'utf-8'
        });

        readStream.pipe(process.stdout);

        console.log("Reading file data via Readable Stream...");
    } catch (error) {
        console.error('Error: ', error.message);
    }
};

await read();
