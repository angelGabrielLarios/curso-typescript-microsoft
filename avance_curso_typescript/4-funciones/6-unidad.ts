(() => {
    /* definicion de tipos de funcioes */
    /* type calculator = (x: number, y: number) => number; */
    interface calculator {
        (x: number, y: number): number
    }

    let addNumbers: calculator = (x: number, y: number): number => x + y;
    let subtractNumbers: calculator = (x: number, y: number): number => x - y;

    console.log(addNumbers(1, 2));
    console.log(subtractNumbers(1, 2));

    let doCalculation = (operation: 'add' | 'subtract'): calculator => {
        if (operation === 'add') {
            return addNumbers;
        } else {
            return subtractNumbers;
        }
    }

    const subs = doCalculation('subtract')
    console.log(subs(3, 8))
})();

(() => {
    /* inferencia de tipos de funciones */
    interface Calculator {
        (x: number, y: number): number;
    }

    /* let addNumbers: Calculator = (x: number, y: number): number => x + y; */
    /* let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2; */

    let addNumbers: Calculator = (num1, num2) => num1 + num2;
    console.log(addNumbers(1, 2))
})();   