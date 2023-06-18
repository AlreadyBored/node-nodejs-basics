const prefix = '--'
const splitter = ", ";

const parseArgs = () => {

    // Pair args to process.
    let argv0 = ''; //< must not contain prefix at start.
    let argv1 = '';

    // Comma splitter control.
    let first = true;

    let result = '';

    process.argv.forEach((val) => {

        argv0 = argv1;
        argv1 = val;

        // Does the first arg in pair have the prefix?
        if (argv0.length >= prefix.length) {
            if (argv0.substring(0, prefix.length) === prefix) {
                // Yes, prefix is detected.                
                
                if (!first)
                    result += splitter;

                result += argv0.substring(2) + " is " + argv1;
                first = false;
            }
        }        
    });  
    
    console.log(result);
};

parseArgs();