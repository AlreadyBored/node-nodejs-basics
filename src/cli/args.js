import {argv} from 'node:process'

const parseArgs = () => {
    const formatted = []
    argv.forEach(function (val, index, array) {
        if(val.includes("--")) {
            formatted.push([`${val.replace("--", "")} is ${array[index + 1]}`])
        }
      });
    const result = formatted.join(',')
    console.log(result)
};

parseArgs();