const read = async () => {
    try {
        const {
            createReadStream
        } = await import('fs');
        const filePath = './files/fileToRead.txt';

        // Readable Stream
        const readStream = createReadStream(filePath, {
            encoding: 'utf-8'
        });

        // Read Stream to "process.stdout"
        readStream.pipe(process.stdout);

        console.log("Reading file data via Readable Stream...");
    } catch (error) {
        console.error('Error: ', error.message); // Just in case
    }
};

await read();
