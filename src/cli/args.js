const parseArgs = () => {
    const prefix = '--';
    const argvArr = process.argv;
    var rssVariables = '';

    argvArr.forEach((argv, index, argvArr) => {
        if(argv.startsWith(prefix)){
            rssVariables = rssVariables + argv.replace(prefix, '') + ' is ' + argvArr[index + 1] + ', ';
        }
    });
    console.log(rssVariables);
};

parseArgs();