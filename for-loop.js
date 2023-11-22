function timeForLoop() {
    const someArray = Array.from(Array(100_000_000).keys())

    console.time();
    for (let i = 0; i < someArray.length; i++) {
        const key = someArray[i];
        const a = key + 1;
    }
    console.timeEnd();
}

timeForLoop();