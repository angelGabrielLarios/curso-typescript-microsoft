(() => {
    interface Employee {
        firstName: string;
        lastName: string;
        fullName(): string;
    }

    let employee: Employee = {
        firstName : "Emil",
        lastName: "Andersson",
        fullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }
    
    //employee.firstName = 10; 

    type TypeEmployee = {
        firstName: string;
        lastName: string;
        fullName(): string;
    }

    let employee2: TypeEmployee = {
        firstName : "Emil",
        lastName: "Andersson",
        fullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }

    console.log(employee)

    console.log(employee2)


    type MyNumber = number

    const numeroRandom: MyNumber = 1


})();