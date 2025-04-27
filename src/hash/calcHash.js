const calculateHash = async () => {
    // Write your code here 
    const { createReadStream } = await import('node:fs');
    const { createHmac } = await import('node:crypto');

    let txt = '';
    const readStream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt', { encoding: 'utf-8' })
    try {
        for await (const chunk of readStream) {
            txt += chunk
        }
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
    console.log(txt)

    const secret = 'holy moly!';
    const hash = createHmac('sha256', secret)
        .update(txt)
        .digest('hex');
    console.log(hash);
};

await calculateHash();