const parseArgs = () => {
    const argsArr = process.argv.slice(2); // // first two values are node script...
    for (let i = 0; i < argsArr.length; i += 2) {
        console.log(argsArr[i].slice(2), "is", argsArr[i + 1]);
    }
};

// For testing purpose
// process.argv[0] = "node";
// process.argv[1] = "script";
// process.argv[2] = "--propName";
// process.argv[3] = "value";
// process.argv[4] = "--prop2Name";
// process.argv[5] = "value2";

parseArgs();
