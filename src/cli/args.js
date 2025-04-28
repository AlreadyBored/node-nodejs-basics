const prefix = '--';

const parseArgs = () => {
   const arrProp = process.argv.reduce((acc, value, index, array) => {
    if (value.startsWith(prefix)) {
        const formattedProp = `${value.replace(prefix,'')} is ${array[index+1]}`;
        return [...acc, formattedProp];
    }
    return acc;
   }, []);

   const argsToConsole = arrProp.join(', ');
   console.log(argsToConsole);
};

parseArgs();