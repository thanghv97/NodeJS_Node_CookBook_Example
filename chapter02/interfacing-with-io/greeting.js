process.stdin.on("data", (data) => {
    // processing on each data event
    const name = data.toString().trim().toUpperCase();
    if (name !== "") {
        // process.stdout.write(`hello ${name}`)
        console.log(`hello ${name}`); // use process.stdout.write + \n
    } else {
        // process.stderr.write("input was empty.");
        console.error("input was empty."); // use process.stderr.write + \n
    }
})