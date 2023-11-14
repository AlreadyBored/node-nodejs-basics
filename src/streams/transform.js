const transform = async () => {
    const fs = require('fs')
    const { Transform } = require('stream')

    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            this.push(reversedText);
            callback()
        }
    })

    process.stdin.pipe(transformData);
    transformData.pipe(process.stdout)

};

// await 
transform();