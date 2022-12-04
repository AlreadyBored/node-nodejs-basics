import { argv } from "node:process";
const parseArgs = () => {
    const commands = argv.slice(2);
    const statements = commands.reduce((acc, v, ind, arr) => {
        let property = v;
        let value = arr[ind + 1];
         if (property.indexOf('--') == 0 &&  value!=undefined && value?.indexOf('--') != 0) {
            property = property.slice(2);
            acc.push(`${property} is ${value}`);
        } 
        return acc;
    }, [])
    console.log(statements.join(', '));
};



parseArgs();