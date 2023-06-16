const transform = async () => {
    process.stdin.on("data", data => {
    data = data.toString().split("").reverse().join("").replace(/\n|\r/g,'');
    process.stdout.write(data + "\n")
})
};

await transform();