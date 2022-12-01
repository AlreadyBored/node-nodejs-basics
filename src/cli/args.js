const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = '';

    process.argv.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            result += `${arg.slice(2)} is ${args[index + 1]}, `;
        }
    });

    console.log(result.slice(0, -2));
};

parseArgs();