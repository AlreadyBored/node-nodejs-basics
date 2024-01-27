
const parseArgs = () => {
    const arrOfArgs = process.argv.slice(2);
    let resultArgObj = {};
    for (let i = 0; i < arrOfArgs.length; i += 2) {
        const propName = arrOfArgs[i].replace(/^--/, '');

        if(arrOfArgs[i + 1]) {
            if (arrOfArgs[i + 1].startsWith('--')) {
                resultArgObj[propName] = undefined;
                i--;
            } else {
                resultArgObj[propName] = arrOfArgs[i + 1];
            }
        } else {
            resultArgObj[propName] = undefined;
        }

    }
    for (const [name, value] of Object.entries(resultArgObj)) {
        console.log(`${name} is ${value}`);
    }
};

parseArgs();

