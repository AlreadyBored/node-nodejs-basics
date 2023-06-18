const scanPrefix = "RSS_";
const splitter = "; ";

const parseEnv = () => {

    let allVars = process.env;    
    let result = '';
    // Comma splitter control.
    let first = true;

    // Scan all obj fields.
    Object.keys(allVars).forEach(function(key,value) {
        // key: var name
        // value: var value
        if (key.length >= scanPrefix.length) {
            if (key.substring(0, scanPrefix.length) === scanPrefix) {
                
                if (!first)
                    result += splitter;

                result += key + "=" + value;
                first = false;
            }                
        }        
    });
    
    console.log(result);
};

parseEnv();