
const burger = ['veggie burger', 'pork burger', 'beef burger', 'chicken burger']

let newArr = [];

const addOn = (array) => {
 for (var i = 0; i < array.length; i ++){
   
   let element = array[i]
   element = "bacon " + element;
   newArr.push(element)
   
 }
 return newArr
}

// let finalA = addOn(burger);

// console.log(finalA)

// const burger = ['veggie burger', 'pork burger', 'beef burger', 'chicken burger']

//   const addOns = burger.map((type) => {
//     return `bacon-${type}`;
//   });

// console.log(addOns)


// .map():

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
   arr[index] = num + 2
}

numbers.forEach(addTwo)
// console.log(numbers)

// .reduce():



// .filter():

numArr = [1, 2, 3, 4]

const filterFunc = (arr) => {
   newArr = []
   for (let i = 0; i < arr.length; i++) {
       if (i % 2 != 0) {
           newArr.push(arr[i])
       }
   }
   console.log(newArr)
   return(newArr)
}

filterFunc(numArr)

// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

let listOfNumbers = [1, 2, 3, 4, 5]; 

let modArr =[]
const mapper = (arr) => {
   for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      element = arr[i] *2;
      modArr.push(element);
   }
}

console.log(modArr)

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

let foodOrders = [{order: 1, cost: 10}, {order:2, cost: 30}, {order: 3, cost: 15}]

const reducer = (arr) => {
let sum = 0
 for (let i = 0; i < arr.length; i++) {
   sum += arr[i].cost
 }
 console.log(sum)
}


reducer(foodOrders)


// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
