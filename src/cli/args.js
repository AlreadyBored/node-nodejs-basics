export const parseArgs = () => {
    const comArgs = process.argv;

    for (let i = 0; i < comArgs.length; i++) {
        if (comArgs[i].match((/^--/))) {
            console.log(`${comArgs[i]} is ${comArgs[i + 1]}`);
            i++;
        }
        else {
            console.log(comArgs[i]);
        }
    }
};