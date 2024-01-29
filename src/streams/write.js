const write = async () => {
    process.stdin.on('data', (data) => {
        const dataString = data.toString();
        console.log(dataString);
        process.stdin.pause();
    });
};

await write();