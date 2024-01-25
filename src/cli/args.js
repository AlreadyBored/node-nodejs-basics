const parseArgs = () => {
    
    const args = process.argv;
    
    args.forEach((elem, index) => {
        if(elem.slice(0,2) === '--') {
            console.log(`${elem.slice(2, elem.length)} is ${args[index + 1]}`)
        }
    });
    
};

parseArgs();