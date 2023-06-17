const parseArgs = () => {
    // Write your code here 
    try {
        const lenArgv = process.argv.length;
        for (let i = 2; i < lenArgv; i+=2){
            console.log(`${process.argv[i].substring(2)} is ${process.argv[i+1]}`);
        }
       
    } catch (error) {
        console.log(error.message);
    }
};

parseArgs();