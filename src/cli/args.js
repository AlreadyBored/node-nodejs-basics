const PREFIX = '--';

const parseArgs = () => {
    const result = [];
    process.argv.slice(2).forEach((value, index, arr) => {
        if (value.startsWith(PREFIX)) result.push(`${value.replace(PREFIX, '')} is ${arr[index + 1]}`)
    })
    const joinedResult = result.join(", ")
    console.log(joinedResult);
};

parseArgs();