const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];

//   1.
dogs.map(function(value){
    value.recFood = value.weight ** 0.75 * 28
})

// 2.
dogs.forEach(function(value){
    if(value.owners[0] == "Sarah"){
        if(value.curFood > value.recFood * 1.1){
            console.log("Dog is greedily");
        }
        else if(value.curFood < value.recFood * 0.9){
            console.log("Dog is lazy");
        }
    }
})

// 3.
const owenersEatTooMuch = []
const owenersEatTooLittle = []
dogs.forEach(function(value){
    if(value.curFood > value.recFood * 1.1){
        owenersEatTooMuch.push(value.owners);
    }
    else if(value.curFood < value.recFood * 0.9){
        owenersEatTooLittle.push(value.owners);
    }
})
// 4.
console.log(`Owener of greedy dogs: ${owenersEatTooMuch}`);
console.log(`Owener of little dogs: ${owenersEatTooLittle}`);

// 5.
console.log(dogs.some(function(value, indx){
    if(value.curFood === value.recFood){
        return true
    }
    if(indx == dogs.length - 1){
        return false
    }
}));

// 6.
console.log(dogs.some(function(value, indx){
    if(value.curFood <= value.recFood * 1.1 && value.curFood >= value.recFood * 0.9){
        return true
    }
    if(indx == dogs.length - 1){
        return false
    }
}));

// 7.
arr = []
dogs.forEach(function(value, indx){
    if(value.curFood <= value.recFood * 1.1 && value.curFood >= value.recFood * 0.9){
        arr.push(value)
    }
})

// 8.
arrcopy = [...dogs]
arrcopy.sort((a, b) => a.recFood - b.recFood)
console.log(arrcopy);

