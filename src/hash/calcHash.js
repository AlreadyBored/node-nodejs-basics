const calculateHash = async () => {
    try {
        const { createReadStream } = await import('fs');
        const crypto = await import('crypto');
        const filePath = './files/fileToCalculateHashFor.txt';
        const readStream = createReadStream(filePath);
        const hash = crypto.createHash('sha256');

        readStream.on('data', (chunk) => {
            hash.update(chunk);
        });

        readStream.on('end', () => {
            const hashValue = hash.digest('hex');
            console.log('SHA256 hash?', hashValue);
        });
    } catch (error) {
        console.error('Error: ', error.message);
    }
};

await calculateHash();
