import process from "process"

const parseArgs = () => {
    let result = '';
    for (let i = 0; i < process.argv.length; i++){
        if(process.argv[i].includes('--')){
            result += `${process.argv[i].slice(2)} is ${process.argv[i + 1]}, `;
        }
    }
    return console.log(result.slice(0, -2));
};

parseArgs();