const write = async () => {
    // Write your code here 
    const { createWriteStream } = await import('fs')
    const writableStream = createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(writableStream);
    console.log('Type something and press Enter. It will be saved to fileToWrite.txt.');
};

await write();