(() => {

    /* parametros obligatoriso */
    let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

    console.log(addThreeNumbers(10, 20, 30))
})();


(() => {
    /* parametros opcionales */
    /* let addThreeNumbers = (x: number, y: number, z?: number): number => x + y + z; */


    /* funcion refactorizada */
    let addThreeNumbers = (x: number, y: number, z?: number): number => {
        if ((z === undefined)) {
            return x + y;
        } else {
            return x + y + z;
        }
    };

    console.log(addThreeNumbers(10, 20, 30))
    console.log(addThreeNumbers(10, 20))




})();


(() => {
    /* parametros predeterminados */
    let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;


    console.log(subtractThreeNumbers(1, 2, 3))

    console.log(subtractThreeNumbers(1, 2))


    console.log(subtractThreeNumbers(10, 20))
    console.log(subtractThreeNumbers(10, 20, 15))


})();