const parseArgs = () => {
    const args = process.argv.slice(2);
    // args its array [ '--some-arg', 'value1', '--other', '1337', '--arg2', '42' ]
    const result = args.reduce(
        (acc, arg, i) => (i % 2 === 0 ? (acc += arg.slice(2) + " is ") : (acc += arg + ", ")),
        ""
    );
    console.log(result.slice(0, -2)); // slice removes ", " at the end of the string
};

parseArgs();

// happening follow: result "" then "some-arg is" then "some-arg is value1, " and and so on
