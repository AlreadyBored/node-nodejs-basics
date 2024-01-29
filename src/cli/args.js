import process from 'process'

const parseArgs = () => {

    var args = process.argv.slice(2);
    let count = 1;
    
    let result = args.forEach(function(value, index, array) {
        for (var i = 0; i < value.length; ++i) {
            if(value[i] !== '-')
                process.stdout.write(value[i]);
        }

        if (count % 2 === 0 && count !== array.length)
            process.stdout.write(", ");
        else
            process.stdout.write(" ");
        
        ++count;
    }); 
    
};

parseArgs();
