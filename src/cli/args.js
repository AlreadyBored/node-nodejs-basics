import pr from 'node:process';

const cliArgs = pr.argv.slice(2);

const parseArgs = () => {
    let arrToDisplay = [];

    for (let i = 0; i < cliArgs.length; i += 2) {
        let prop = `${cliArgs[i].substring(2)} is ${cliArgs[i + 1]}`;
        arrToDisplay.push(prop);
    }

    arrToDisplay.join(', ');

    console.log(arrToDisplay);
};

parseArgs();