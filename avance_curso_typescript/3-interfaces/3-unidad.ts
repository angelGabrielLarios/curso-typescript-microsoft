(() => {
    interface IceCream {
        flavor: string
        scoops: number
        intrucctions?: string
    }


    const myIceCream: IceCream = {
        scoops:2,
        flavor: 'vanilla'
    }

    console.log(myIceCream.flavor)


    function tooManyScoops(dessert: IceCream) {

        if(dessert.scoops >= 4) {
            return `${dessert.scoops} is too many scoops !`
        }
        return `You order will be ready soon!`
        
    }

    console.log(tooManyScoops({flavor: 'vainilla', scoops: 5}))

})();