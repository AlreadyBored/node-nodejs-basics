const parseArgs = () => {
    
    process.argv.forEach(function(val, index, array) {
        if(val.match(/^--/)) {
            console.log(val.slice(2) + ' is ' + array[index+1])
        }
    }); 

};

parseArgs();