function timeForLoop() {
    const someArray = Array.from(Array(100_000_000).keys())

    console.time();
    for (const key of someArray) {
        const a = key + 1;
    }
    console.timeEnd();
}

timeForLoop();