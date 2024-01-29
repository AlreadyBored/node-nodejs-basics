const calculateHash = async () => {
    try {
        const { createReadStream } = await import('fs');
        const crypto = await import('crypto');
        const filePath = './files/fileToCalculateHashFor.txt';

        // Readable stream creation (from file)
        const readStream = createReadStream(filePath);

        // Hash object creation
        const hash = crypto.createHash('sha256');

        // Pipe file through the hash
        readStream.on('data', (chunk) => {
            hash.update(chunk);
        });

        // All data read? >> print hash value
        readStream.on('end', () => {
            const hashValue = hash.digest('hex');
            console.log('SHA256 hash?', hashValue);
        });
    } catch (error) {
        console.error('Error: ', error.message);
    }
};

await calculateHash();
