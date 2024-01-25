/**
 *  implement function that parses command line arguments (given in format 
 * --propName value --prop2Name value2, you don't need to validate it) 
 * and prints them to the console in the format propName is value, prop2Name is value2
 */
import process from 'process';
const parseArgs = () => {
    // Write your code here 
    let str = '';
    process.argv.forEach((val) => {
        if (typeof (val) === 'string' && val.length > 2 && val.startsWith("--")) {
            str = val.slice(2);
        } else if (str !== '') {
            str += ` is ${val}`;
            console.log(str);
            str = '';
        }
        
    });
};

parseArgs();