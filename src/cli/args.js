
//implement function that parses command line arguments (given in format --propName value --prop2Name value2,
// you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
export const parseArgs = () => {
    for (let i=2 ; i< process.argv.length;i=i+2){
        console.log(`${process.argv[i]} is ${process.argv[i+1]}`)
    }
};

parseArgs();