//TODO: implement using Transform Stream

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

const transform = async () => {
    process.stdin.on('data', data => {
        process.stdout.write(`transformed data: ${reverseString(data.toString())}\n`);
        process.exit();
    });
};

await transform();