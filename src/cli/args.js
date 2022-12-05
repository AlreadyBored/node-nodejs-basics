const parseArgs = () => {
    // Write your code here
    let nodePath = process.argv[0];
    let appPath = process.argv[1];
    let propName1 = process.argv[2];
    let value1 = process.argv[3];
    let propName2 = process.argv[4];
    let value2 = process.argv[5];

    console.log(`${propName1.slice(2)} is ${value2}, ${propName2.slice(2)} is ${value2}`);
};

parseArgs();