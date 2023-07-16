(() => {

    /* funcion normal */
    function addNumbers(x: number, y: number): number {
        return x + y;
    }

    console.log(addNumbers(1, 2))


})();

(() => {
    /* funciones anonimas */

    const addNumbers = function (x: number, y: number): number {
        return x + y;
    }
    console.log(addNumbers(1, 2))
})();

(() => {
    let sum = function (input: number[]): number {
        let total: number = 0;
        for (let i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
                continue;
            }
            total += Number(input[i]);
        }
        return total;
    }

    console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


})();

(() => {
    /* funciones flecha */

    // Anonymous function
    /* return explcito */
    let addNumbers1 = function (x: number, y: number): number {
        return x + y;
    }

    // Arrow function
    /* return implicito */
    let addNumbers2 = (x: number, y: number): number => x + y;
})();


(() => {
    let total2 = (input: number[]): number => {
        let total: number = 0;
        for (let i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
                continue;
            }
            total += Number(input[i]);
        }
        return total;
    }

    console.log(total2([11, 12, 13]))
})();