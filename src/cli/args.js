import process from "node:process";

const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArgs = {};
    const argPattern = /--([a-zA-Z1-9-]+)\s+([\w.-]+)/g;

    args.join(" ").replace(argPattern, (_, propName, value) => {
        parsedArgs[propName] = value;
    });

    const formattedArgs = Object.entries(parsedArgs)
        .map(([propName, value]) => `${propName} is ${value}`)
        .join(", ");

    console.log(formattedArgs);
};

parseArgs();
