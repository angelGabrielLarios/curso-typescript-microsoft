(() => {
    function displayAlert(message: string): void {
        console.log('The message is ' + message);
    }

    displayAlert('angel')
})();

(() => {
    function sum(input: number[]):number {
        let total = 0;
        for (let count = 0; count < input.length; count++) {
            if (isNaN(input[count])) {
                continue;
            }
            total += Number(input[count]);
        }
        return total;
    }

    console.log(sum([1, 2 ]))
})();