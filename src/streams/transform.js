export const transform = async () => {
    process.stdin.on('data', data => {
        const reversedData = data.toString().split('').reverse().join('');

        process.stdout.write(reversedData);
    })

};

transform();
