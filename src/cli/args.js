export const parseArgs = () => {
    const arrArgs = process.argv.slice(2);
    const arr = [];
    for(let i = 0; i < arrArgs.length; i++) {
        if(arrArgs[i].match(/--/)) {
            arr.push(`${arrArgs[i]} is ${arrArgs[i + 1] ? arrArgs[i + 1] : ''}`);
        }
    }
    
    return arr.forEach((el) => console.log(el));
};

parseArgs();
