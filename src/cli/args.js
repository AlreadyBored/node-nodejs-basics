export const parseArgs = () => {
    const startProp = '--';
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i++) {
        if (args[i].slice(0,2) === startProp) {
            console.log(`${args[i].slice(2)} is ${args[i + 1]}`);
            i++;
        }
    }
};


parseArgs();
