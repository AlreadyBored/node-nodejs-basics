const parseArgs = () => {
    const args = process.argv.slice(2);
    let output = "";

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const value = args[i + 1];
        output += `${propName} is ${value}, `;
    }

    console.log(output.slice(0, -2));
};

parseArgs();
