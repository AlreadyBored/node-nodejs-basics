process.stdin.on('data', (data) => {
    const reversedData = data.toString().split('').reverse().join('');
    process.stdout.write(reversedData);
});