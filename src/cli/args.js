const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = '';
    for (let i = 0; i < args.length; i += 2) {
        result += `${args[i]} is ${args[i + 1]}, `;
    }
    console.log(result.slice(0, -2));
};

parseArgs();