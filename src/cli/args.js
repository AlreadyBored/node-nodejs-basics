export const parseArgs = () => {
    let copyArgv = process.argv.slice(2);
    for (let key in copyArgv) {
        if (parseInt(key) % 2 === 0)
            process.stdout.write(copyArgv[key].substr(2));
        else {
            process.stdout.write(' is ' + copyArgv[key]);
            if (parseInt(key) !== copyArgv.length - 1) process.stdout.write(', ');
        }
    }
};

await parseArgs();