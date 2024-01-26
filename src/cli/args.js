const parseArgs = () => {
    const argv = process.argv.slice(2).join(" ").split("--").slice(1);

    const result = argv.map((item) => {
        const [ property, value ] = item.trim().split(" ");
        return `${property} is ${value}`;
    }).join(", ");

    console.log(result);
};

// console.log(`${item.trim().split(" ")[0]} is ${item.trim().split(" ")[1]}`);
parseArgs();