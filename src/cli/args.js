export const parseArgs = () => {
    const args = process.argv.slice(2);
    let resultString = [];

    for(let key = 0; key < args.length; key+=2) {
        resultString.push(`${args[key].slice(2)} is ${args[key + 1]}`)
    }
    console.log(resultString.join(', '))
};
