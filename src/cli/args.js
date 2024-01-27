const parseArgs = () => {
    let argsFromCLI = process.argv.slice(2);
    let resArr = [];
    argsFromCLI.map(function (val, index) {
      if(val.startsWith('--')) {
       resArr.push(val.slice(2)+' is '+argsFromCLI[index+1]);
      }
    });

    console.log(resArr.join(', '));
};

parseArgs();