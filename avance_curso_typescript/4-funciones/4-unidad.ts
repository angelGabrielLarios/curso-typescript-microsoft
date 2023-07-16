(() => {

    /* parametros obligatorios */
    function addNumbers(x: number, y: number): number {
        return x + y;
    }

    addNumbers(1, 2); // Returns 3
    //addNumbers(1);    // Returns an error
})();

(() => {
    /* parametros opcionales */
    function addNumbers(x: number, y?: number): number {
        if (y === undefined) {
            return x;
        } else {
            return x + y;
        }
    }

    console.log(addNumbers(1, 2)); // Returns 3
    console.log(addNumbers(1));    // Returns 1


})();

(() => {
    /* parametros predeterminados */
    function addNumbers(x: number, y = 15): number {
        return x + y;
    }

    console.log(addNumbers(1, 2));  // Returns 3
    console.log(addNumbers(1));     // Returns 26
    console.log(addNumbers(0))
})();

(() => {

    /* parametros rest */

    let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
        let total: number = firstNumber;
        for (let counter = 0; counter < restOfNumbers.length; counter++) {
            if (isNaN(restOfNumbers[counter])) {
                continue;
            }
            total += Number(restOfNumbers[counter]);
        }
        return total;
    }

    addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
    addAllNumbers(2);                    // returns 2
    addAllNumbers(2, 3, 3);        // flags error due to data type at design time, returns 5


    const showArguments = (...array: unknown[]): void => {
        console.log(array)
    }


    showArguments(1, 2, 3, 4, 5, 'angel', true)
})();

(() => {

    /* parametros de objecto desconstruido */
    interface Message {
        text: string;
        sender: string;
    }

    function displayMessage({ text, sender }: Message) {
        console.log(`Message from ${sender}: ${text}`);
    }

    displayMessage({ sender: 'Christopher', text: 'hello, world' });


    interface Task {
        id: number
        text: string
        done: boolean
    }

    function ShowTaskHTML({ id, text, done }: Task): void {
        console.log(
            `
            <div id="${id}" select="${done}">
                ${text}
            </div>
            `
        )
    }
    ShowTaskHTML({ id: 1, text: "angel", done: false })
})();