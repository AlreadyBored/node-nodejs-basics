const parseArgs = () => {
    
    process.argv.forEach(function(value, index, array) {
        if(value.match(/^--/)) {
            console.log(value.slice(2) + ' is ' + array[index+1])
        }
    }); 

};

parseArgs();