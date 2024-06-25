function conjuntoPotencia(arr) {
    let powerSet = [[]];

    for (let i = 0; i < arr.length; i++) {
        const currentLength = powerSet.length;
        for (let j = 0; j < currentLength; j++) {
            const subset = powerSet[j].concat(arr[i]);
            powerSet.push(subset);
        }
    }

    console.log(powerSet);
    console.log();
    console.log("N = " + (2**(arr.length)));
}

conjuntoPotencia([1, 2, 3]);
