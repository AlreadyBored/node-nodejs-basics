const transform = async () => {
    // Write your code here 
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            // Reverse the text and push it to the output
            const reversedText = chunk.toString().split('').reverse().join('');
            this.push(reversedText);
            callback();
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();