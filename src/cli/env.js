const parseArgs = () => {

    Object.entries(process.env)
        .forEach(item => {
            if(item[0].includes("RSS_")){
                console.log(`${item[0]}=${item[1]}`)
            }
        })
};

// For testing purpose
// process.env.RSS_name1 = "value1";
// process.env.RSS_name2 = "value2";
// process.env.RSS_name3 = "value3";

parseArgs();