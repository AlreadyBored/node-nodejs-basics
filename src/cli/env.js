const parseEnv = () => {
    let res = []

    for (let el in process.env) {
        if (el.slice(0, 4) === "RSS_") {
            res.push(`${el}=${process.env[env]}`)
        }
    }
    console.log(res.join("; "))
};


parseEnv();