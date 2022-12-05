import Transform from 'stream';

const transform = async () => {
    // Write your code here
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(chunk.split('').reverse().join(''));
    }
    });
};

await transform();