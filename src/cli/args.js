export const parseArgs = () => {
    const result = [];
    const [executer, file, ...rest] = process.argv;
    rest.forEach((item, ind, array) => {
        if (item.length > 2 && item.slice(0, 2) === '--') {
            if (array[ind + 1].slice(0, 2) !== '--') {
                result.push(`${item.slice(2)} is ${array[ind + 1]}`)
            }
        }
    });
    console.log(result.join(', '));
};

parseArgs();
