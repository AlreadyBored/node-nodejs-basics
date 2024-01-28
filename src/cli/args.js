const parseArgs = () => {
    const args = process.argv;
    const parsedArr = [];
    while(args.length>0){
        let arr = args.splice(0,2);
        parsedArr.push(arr);
    }
    for(let i = 1; i < parsedArr.length; i++){
        console.log(`${parsedArr[i][0].slice(2)} is ${parsedArr[i][1]}; \n`);
    }
};

parseArgs();