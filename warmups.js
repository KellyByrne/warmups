 function insensitiveRemoveDupes(string){
  var output = [];
  var object = {};
  var array = string.toUpperCase().split("");
   array.forEach(function(element){
    if(object[element]=== undefined){
//      if(object[element.toUpperCase()] || object[element.toLowerCase()] === undefined){
      object[element] += 1;
      output.push(element);
    } 
    
  })
  return output.join("");
 }


 insensitiveRemoveDupes('AABB'); // 'AB'
 insensitiveRemoveDupes('AaAaBbBb'); // 'AB'
//  insensitiveRemoveDupes('cAtCaT'); // 'cAt'


function doubleNumber(array){
    var obj = {};
    array.forEach(function(element){
        if (obj[element] === undefined) {
            obj[element] = 1;
        } else {
            obj[element] += 1;
        }
    if(obj[element] >= 2){
    console.log(obj[element]); 
    }
    });
    }

    

function fizzBuzz(){
    for(var i=1; i<=100; i++){
        if(i % 3 === 0 && i % 5 ===0){
            console.log("FizzBuzz")
        } else if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

function collatzSequence(num){
  if(num === 1) return 1;

  if(num % 2 === 0) {
    var newNum = num/2;
  } else if (num % 2 === 1){
    var newNum = (3*num)+ 1;
  }
  
  return num + "-> " + collatzSequence(newNum);

}

console.log(collatzSequence(252));



var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };

 function keys(newObject){
   var length= Object.keys(newObject).length;
   var keys = [];
   var values = [];
    for(var i=0; i<length; i++){
      keys.push(Object.keys(newObject)[i]);
      values.push(newObject[Object.keys(newObject)[i]]);
    }
    console.log(keys);
    console.log(values);
  }

  keys(obj);


var snippets = [
  "Portland pug",
  "90s sustainable quinoa ",
  "Artisan Thundercats drinking Pabst",
  "chia readymade",
  "flexitarian",
  "lo-fi fashion",
  "mustache Intelligentsia",
  "Aesthetic keytar",
  "hella beard boy",
  "Beards",
  "mixologist",
  "craftsmania",
  "keytar beard",
  "Thundercats mullet",
  "dayglo milk fat",
  "zebras zebras lions and bears"
];  


  var hipstafy = function(sentence){
    var output=[];
    var array = sentence.split(" ");
    for(var i=0; i<array.length; i++){
      output.push(array[i] +" "+ snippets[Math.floor(Math.random() * (16 + 1))])
    }
    return output;
  }
hipstafy("this is my sentence");

var snippets = [
  "Portland pug",
  "90s sustainable quinoa ",
  "Artisan Thundercats drinking Pabst",
  "chia readymade",
  "flexitarian",
  "lo-fi fashion",
  "mustache Intelligentsia",
  "Aesthetic keytar",
  "hella beard boy",
  "Beards",
  "mixologist",
  "craftsmania",
  "keytar beard",
  "Thundercats mullet",
  "dayglo milk fat",
  "zebras zebras lions and bears"
];  


  var hipstafy = function(sentence){
    var output=[];
    var array = sentence.split(" ");
    for(var i=0; i<array.length; i++){
      output.push(array[i] +" "+ snippets[Math.floor(Math.random() * (16 + 1))])
    }
    return output;
  }
hipstafy("this is my sentence");


var arrayofInt = [1003,6,2,4,7,9, 10, 11, 12, 3,5,1, 1000, 24, 1002, 1001,1004];

var highestInt = function(array) {
  var output = [];
return array.reduce(function(prev, curr){
  if(curr > prev) {
      output = [];
     output.push(curr);
   
  }
  return output;
}, 0)
}


function factorial(n) {
     if (n==0) return 1;
     return n * factorial(n-1);

} 

factorial(170);



function Cow(name, age){
  this.name = name;
  this.age = age
 };

Cow.prototype.moo = function() {
  return "moooooooo I'm " + this.name + " mooooooooo!!!!!!!";
};



var bessy = new Cow("Bessy", 10);
// console.log(bessy.moo());

var mooey = new Cow("Mooey", 2);
// console.log(mooey.moo());

var chewy = new Cow("Chewy", 1);
// console.log(chewy.moo());


function CowFarm(names) {
  this.mooInOrder = function() {
    var result = names.map(function(name) {
      return name.moo();  
    });
    return result.join('\n');
  }
}

var farm = new CowFarm([bessy, mooey, chewy]);

console.log(farm.mooInOrder());


function charCounts(string){
    array = string.split('');
    charObj = {};
    array.forEach(function(element){
       if(charObj[element] === undefined){
           charObj[element] = 1;
       } else {
           charObj[element] += 1;
       }
   })
    return charObj;
}

charCounts("This is a string!!!")
charCounts("!Data!Is~The*Coolest")

function last_n(array, num){
    var newArray = [];
    for(var i= array.length -1; i > num; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
last_n([1,2], 3);


function convertToGrade(arr){
  output= [];
  for(var i=0; i<arr.length; i++){
    if(arr[i] < 60){
      output.push("F");
    } else if(arr[i] >= 60 || arr[i] >= 69 ){
      output.push("D");
    } else if(arr[i] >= 70 || arr[i] >= 79 ){
      output.push("C");
    } else if(arr[i] >= 80 || arr[i] >= 89 ){
      output.push("B");
    } else if(arr[i] >= 90 || arr[i] >= 100 ){
      output.push("A");
    }
  }
  return output;
}

convertToGrade([88, 75, 62, 55, 100, 96])


var obj = {name: “Kelly”, hobbies: [“walking”, “banjos”]};

something = function(object) { 
 for (keys in object) {
  console.log(keys);
 }
}


something(obj);


var orcs = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 543}
]
 
function getWeakest(arr){
  return arr.reduce(function(prev, curr){
     if (prev.strength < curr.strength) {
         return prev;
        
     }
  })
}


getWeakest(orcs);


var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]

// bookData(books)
// //-> {
//   "1934356360": {
//     "title": "Learn to Program",
//     "author": "Chris Pine",
//     "isbn10": 1934356360
//   },
//   "1593275846": {
//     "title": "Eloquent Javascript",
//     "author": "Marijn Haverbeke",
//     "isbn10": 1593275846
//   }
// }

function bookData(arr){
    var object = {};
    for(var i=0; i< arr.length; i++){
     object[arr[i][2]] = {title: arr[i][0], author: arr[i][1], isbn: arr[i][2]}

    }
    return object;
}

bookData(books);


//Write a function that will capitalize not only the first word of the fish in the array, but the second as well.

var fish = [ "rainbow trout", "smallmouth bass", "white bass", "channel catfish" ]

//capitalizeFish(fish) //-> ["Rainbow Trout", "Smallmouth Bass", "White Bass", "Channel Catfish"]


function capitalizeFish(arr){
    var output= [];
    for(var i=0; i<arr.length; i++){
       var words = arr[i].split(' ')
       for(var i=0; i<words.length; i++){
           var string = ' ';
         string += words[i][0].toUpperCase() + ' ' 
         output.push(string)
       }
    }
    return output;
}

capitalizeFish(fish);



function gameOfThrees(num) {
    var newNum;
   if(num === 0 || num === 1){
       return 1
   }

    if (num % 3 === 0) {
        console.log(num, 0)
     newNum = num / 3;
    } else if  (num % 2 == 0) {
        console.log(num, -1)
       newNum = (num - 1) / 3;
  } else {
      console.log(num, 1)
      newNum = (num + 1) / 3;
  }

    
    return gameOfThrees(newNum)
}

gameOfThrees(100);


 var pieces = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];

function sendingPieces(array) {
    var count;
    var random = Math.floor(Math.random() * (array.length - 0 + 1)) ;

    if(array.length == 0) {
        array = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];
    }
    
    if(count == 50){
        return 'done'
    }
    console.log(array[random]);
    count += 1;
    console.log(count)


    array.splice(random, 1)
    console.log(array)
    return sendingPieces(array)
   
}

//go through array select one at random
// return this piece
//then re go through and randomly choose one from the new array
//until the array is empty
//then refill the array and randomly send again
  

sendingPieces(pieces);


var input1 = "*** *** **"
var input2 = "*** *** **** *"
var input3 = "* **"

// function longestString(str){
//     var array = str.split(' ')
//   return array.reduce(function(prev, curr){
//       if(curr.length > prev.length){
//           return curr
//       }
//   })
// }

function longestString(str){
    var output = '';
    var array = str.split(' ')
 for(var i=0; i<array.length; i++){
     if(array[i].length > output.length){
         output = array[i]
     }
 }
  return output.length;
}


// function longestString(str){
//     var output = '';
//     var array = str.split(' ')
//  array.forEach(function(elem){
//     if(elem.length > output.length){
//         output = elem.length
//     } else {output = output}
//  })
//  return output;
// }

longestString(input3)


// remove duplicates based on the kidId, and map the toyNames into an array.

var first = [
  {kidId: 1, kidName: 'Ed', toyName: 'Teddy Bear'},
  {kidId: 1, kidName: 'Ed', toyName: 'Car'},
  {kidId: 2, kidName: 'Su', toyName: 'Teddy Bear'},
]
// return an array like this:

// [
//   {kidId: 1, kidName: 'Ed', toys: ['Teddy Bear', 'Car']},
//   {kidId: 2, kidName: 'Su', toys: ['Teddy Bear']},
// ]

function kids(array){
    var object = {}
    var output = [];
   return array.reduce(function(prev, curr){
        if(prev.kidId === curr.kidId){
            var object = {'kidId': curr.kidId, 'kidName': curr.kidName, 'toys': [prev.toyName, curr.toyName]}
            output.push(object)
            return object;
        }
    })
}

kids(first);




var results = [{"id":1,"old_days":"blah","these_days":"blah","year":"1991"},
  {"id":2,"old_days":"walked to school","these_days":"drive to class","year":"1998"},
  {"id":3,"old_days":"wore overalls everyday of fourth grade","these_days":"haven't worn a pair since","year":"1999"},
  {"id":4,"old_days":"hello","these_days":"sup","year":"1981"},
  {"id":5,"old_days":"is this working?","these_days":"it's working","year":"2015"},
  {"id":6,"old_days":"is this working?","these_days":"it's working","year":"2015"}]


function formatter(array){
    var self = "g12-kelly-byrne-memories.cfapps.io/api/v1/memories"
    var data = [];
  for (var i=0; i< array.length; i++){
    data.push({
         "type": "memory",
        "id": array[i].id, 
        "attributes": {"old_days": array[i].old_days, "these_days": array[i].these_days, "year": array[i].year}, "links": "g12-kelly-byrne-memories.cfapps.io/api/v1/memories"});
    }
    return {"links": {self: "g12-kelly-byrne-memories.cfapps.io/api/v1/memories"}, "data": data}
}



formatter(results);


var customers = [
  {id: 1, name: 'Gertrude'},
  {id: 2, name: 'Taurean'},
  {id: 3, name: 'Vincent'},
  {id: 4, name: 'Blaze'},
  {id: 5, name: 'Carli'},
  {id: 6, name: 'Rebekah'},
]


var orders = [
  {id: 1, customerId: 1, date: '5/5/2012'},
  {id: 2, customerId: 1, date: '6/2/2014'},
  {id: 3, customerId: 2, date: '5/16/2015'},
  {id: 4, customerId: 3, date: '1/1/2012'},
  {id: 5, customerId: 4, date: '1/24/2014'},
  {id: 6, customerId: 2, date: '7/26/2014'},
]

 function joinOrders(orders, customers) {
    var indexed = customers.reduce(function (result, customer) {
        console.log(result)
      result[customer.id.toString()] = customer
      return result
    }, {})

    console.log(indexed)
//     orders.forEach(function (order) {
//       order.customers = order.customers.map(function (_id) {
//         return indexed[id.toString()]
//       })
//     })
//     return orders
  }

  joinOrders(orders, customers);


  var array = [1,2,3,3,4,5,4,4, 7,7,8,4]
function createObj(arr){
    var output = {};
    for (var i=0; i<arr.length; i++){
        if(!output[arr[i]]){
            output[arr[i]] = 1;
        }else {
            output[arr[i]] += 1;
        }
    }
    for prop in output
}

createObj(array);



var array = [1,2,3,3,4,5,4,4, 7,7,8,4]
function createObj(arr){
    var output = {};
    for (var i=0; i<arr.length; i++){
        if(!output[arr[i]]){
            output[arr[i]] = 1;
        }else {
            output[arr[i]] += 1;
        }
    }
    for (var prop in output) {
        console.log(output[prop[i]])
        }
    } 
    
}

createObj(array);


function dfs(node){
  var result = [node.nodeName];
  console.log(node.nodeName);
  for(var i=0; i <node.childNodes.length; i++){
    result = result.concat(dfs(node.childNodes[i]));
  }
  return result;
}

dfs(document.body)



var november = {
    1: 121.18,
    2: 122.57,
    3: 122,
    4: 120.92,
    5: 121.06,
    6: 120.57,
    7: 116.77,
    8: 116.11,
    9: 115.72,
    10: 112.34,
    11: 114.175,
    12: 113.69,
    13: 117.29,
    14: 118.78,
    15: 119.3,
    16: 117.75,
    17: 118.88,
    18: 118.03,
    19: 117.81,
    20: 118.3
}


function maximizeProfits(object){
    var currentCapital = 1000;
    var startingClosePrice = object[1];
    var lowestClosePrice = startingClosePrice;
    var highestClosePrice = startingClosePrice;
    var lowDay = 0;
    var highDay = 0;

     for (key in object) {
        if(object[key] < lowestClosePrice){
            lowestClosePrice = object[key];
            lowDay = key;
        }
     }

     function findHighDay(){ 
        if(highDay > lowDay && object[key] > highestClosePrice  ) {
            highestClosePrice = object[key];
            highDay = key;
        }
    }
    


  }

     console.log("HighDay= " + highDay + ":" + highestClosePrice + " LowDay= " + lowDay + ":" + lowestClosePrice)
   
   
}

maximizeProfits(november);


var relationships = {
    sister: ["Julia", "Shannon"],
    mom: ["Patty"],
    dad: ["Jim"],
    boyfriend: ["Darrin"]
}

console.log(Object.keys(relationships))
console.log(relationships[Object.keys(relationships)])



function allCharsUnique(string) {
  var object = {};
  var array = string.split("");
  console.log(array)
  array.forEach(function(character) {
    console.log(character)
    if(object[character] === undefined){
      object[character] = 1;
    } else {
      object[character] += 1;
    }
})
  console.log(object);

  for (var property in object) {
    if(object[property] > 1){
        return false;
      } 
  }

  
  
}

allCharsUnique("helo");



function Bicycle(wheelSize, color) {
  this.wheelSize = wheelSize;
  this.color = color;
}

Bicycle.prototype.validateWheelSize = function(wheelsize) {
    if (this.validWheelSizes.indexOf(wheelSize) == -1) throw 'Wheelsize for road bikes must be one of ' + this.validWheelSizes.join(', ');
}

Bicycle.prototype.toString = function() {
  return 'This sweet ' + this.color + ' bicycle has an awesome ' + this.wheelSize + ' wheelset.';
};

Bicycle.prototype.takeForRide = function() {
  return 'Currently riding a shiny ' + this.color + ' bike down the sidewalk!';
}

function RoadBike(wheelSize, color) {
  this.validWheelSizes = ['700C'];
  this.validateWheelSize(wheelSize);
  this.wheelSize = wheelSize;

  this.color = color;
}
RoadBike.prototype = new Bicycle();



function BMXBike(wheelsize, color) {
    this.wheelsize = wheelsize;
    this.color = color;
}

BMXBike.prototype = new Bicycle();

var bmxBike = new BMXBike(1000, "red");

bmxBike.toString();

bmxBike.takeForRide();




function intersection(array1, array2){
  var common = [];
  array1.map(function(element){
    for(var i=0; i<array2.length; i++){
    if(element === array2[i]){
      common.push(element);
    }}
  })
  return common;
}

 var test1 = [1,2,3,4,5];
  var test2 = [3,4,7,8,9];
var test3 = [];
console.log(intersection(test1, test3));


var foods = [
  {name: 'Cheese', department: 'grocery', price: 10},
  {name: 'Duck fat', department: 'meat', price: 15},
  {name: 'Steak', department: 'meat', price: 12},
  {name: 'Fake Steak', department: 'vegetarian', price: 12},
  {name: 'Bleach', department: 'household', price: 12},
  {name: 'Blueberry pie', department: 'grocery', price: 9},
  {name: 'Pumpkin pie', department: 'grocery', price: 19},
  {name: 'Cherry pie', department: 'grocery', price: 1},
  {name: 'Boisonberry pie', department: 'grocery', price: 0},
  {name: 'Poisonberry pie', department: 'grocery', price: 900},
  {name: 'Meat pie', department: 'meat', price: 50}
];


foods.filter(function(food){
 return food.department === 'meat' || food.department === 'grocery';
}).filter(function(food){
    return food.price < 20 && food.price >= 10;
}).map(function(food){
  return  food.name + " - $" + food.price
});



var people = [
  {firstName: "Hyman", lastName: "Runte", country: "United States", age: 23},
  {firstName: "Zachery", lastName: "Ondricka", country: "US", age: 59},
  {firstName: "Adriana", lastName: "Bogan", country: "CAN", age: 36},
  {firstName: "Meda", lastName: "Macejkovic", country: "Canada", age: 58},
  {firstName: "Gerardo", lastName: "O'Reilly", country: "CAN", age: 23},
  {firstName: "Fredy", lastName: "Kuhlman", country: "IRL", age: 10},
  {firstName: "Thelma", lastName: "Eichmann", country: "United States", age: 73},
  {firstName: "Hector", lastName: "Wilderman", country: "CAN", age: 71},
  {firstName: "Queen", lastName: "Corkery", country: "CAN", age: 91},
  {firstName: "Torrey", lastName: "Larson", country: "Canada", age: 10},
  {firstName: "Zella", lastName: "Stracke", country: "CAN", age: 84},
  {firstName: "Harry", lastName: "Frami", country: "UK", age: 34},
  {firstName: "Oma", lastName: "Greenholt", country: "England", age: 28},
  {firstName: "Mattie", lastName: "Hintz", country: "US", age: 65},
  {firstName: "Edyth", lastName: "Raynor", country: "US", age: 77},
  {firstName: "Jessie", lastName: "Legros", country: "England", age: 21},
  {firstName: "Rosalee", lastName: "Schmeler", country: "US", age: 69},
  {firstName: "Nyasia", lastName: "Block", country: "US", age: 37},
  {firstName: "Josh", lastName: "Gleichner", country: "Canada", age: 72},
  {firstName: "Jordon", lastName: "Kuhlman", country: "IRL", age: 81},
  {firstName: "Yvonne", lastName: "Quitzon", country: "CAN", age: 92},
  {firstName: "Abner", lastName: "Kunde", country: "Ireland", age: 7},
  {firstName: "Sandrine", lastName: "Smitham", country: "CAN", age: 50},
  {firstName: "Simone", lastName: "Zboncak", country: "US", age: 74},
  {firstName: "Sheldon", lastName: "Beier", country: "Canada", age: 56},
  {firstName: "Kira", lastName: "Spinka", country: "US", age: 81},
  {firstName: "Reymundo", lastName: "Ryan", country: "CAN", age: 91},
  {firstName: "Clint", lastName: "Carter", country: "United States", age: 6},
  {firstName: "Nadia", lastName: "Leuschke", country: "CAN", age: 41},
  {firstName: "Lily", lastName: "Connelly", country: "US", age: 73},
  {firstName: "Lola", lastName: "Cormier", country: "United States", age: 41},
  {firstName: "Tara", lastName: "Goodwin", country: "US", age: 40},
  {firstName: "Jaycee", lastName: "Lynch", country: "US", age: 15},
  {firstName: "Gilbert", lastName: "Hane", country: "England", age: 1},
  {firstName: "Josh", lastName: "Bosco", country: "US", age: 18},
  {firstName: "Edwin", lastName: "Greenholt", country: "UK", age: 85},
  {firstName: "Antoinette", lastName: "Hessel", country: "United States", age: 3},
  {firstName: "Ernestine", lastName: "Metz", country: "UK", age: 6},
  {firstName: "Lazaro", lastName: "Gutkowski", country: "US", age: 95},
  {firstName: "Oran", lastName: "Dietrich", country: "Ireland", age: 38},
  {firstName: "Olin", lastName: "Lowe", country: "UK", age: 2},
  {firstName: "Jennie", lastName: "Lubowitz", country: "UK", age: 59},
  {firstName: "Mario", lastName: "Murazik", country: "Canada", age: 39},
  {firstName: "Efren", lastName: "Gislason", country: "IRL", age: 63},
  {firstName: "Adrianna", lastName: "Keebler", country: "IRL", age: 89},
  {firstName: "Miller", lastName: "Connelly", country: "Ireland", age: 1},
  {firstName: "Felicita", lastName: "Kling", country: "IRL", age: 28},
  {firstName: "Johanna", lastName: "Bashirian", country: "CAN", age: 57},
  {firstName: "Cristopher", lastName: "Borer", country: "England", age: 48},
  {firstName: "David", lastName: "Gottlieb", country: "US", age: 65},
  {firstName: "Maud", lastName: "Altenwerth", country: "UK", age: 32},
  {firstName: "Carolanne", lastName: "Emard", country: "Ireland", age: 47},
  {firstName: "Joanny", lastName: "Bernier", country: "US", age: 94},
  {firstName: "Fatima", lastName: "Fahey", country: "US", age: 82},
  {firstName: "Mia", lastName: "Osinski", country: "Ireland", age: 71},
  {firstName: "Edna", lastName: "Marquardt", country: "US", age: 40},
  {firstName: "Dana", lastName: "Rice", country: "UK", age: 67},
  {firstName: "Grover", lastName: "Keebler", country: "Ireland", age: 35},
  {firstName: "Henry", lastName: "McCullough", country: "IRL", age: 14},
  {firstName: "Abby", lastName: "Kling", country: "IRL", age: 77},
  {firstName: "Delphia", lastName: "Turcotte", country: "England", age: 20},
  {firstName: "Edgardo", lastName: "Bednar", country: "IRL", age: 71},
  {firstName: "Gust", lastName: "Leffler", country: "CAN", age: 7},
  {firstName: "Dorian", lastName: "Harvey", country: "Canada", age: 86},
  {firstName: "Reanna", lastName: "Hand", country: "IRL", age: 12},
  {firstName: "Edd", lastName: "Towne", country: "UK", age: 77},
  {firstName: "Miracle", lastName: "Jenkins", country: "United States", age: 22},
  {firstName: "Verda", lastName: "Oberbrunner", country: "US", age: 62},
  {firstName: "Destini", lastName: "Bartoletti", country: "IRL", age: 43},
  {firstName: "Tamara", lastName: "Dach", country: "Canada", age: 98},
  {firstName: "Valentin", lastName: "Beatty", country: "CAN", age: 86},
  {firstName: "Robert", lastName: "Tromp", country: "CAN", age: 78},
  {firstName: "Carroll", lastName: "Weber", country: "Canada", age: 71},
  {firstName: "Holly", lastName: "Cummerata", country: "US", age: 54},
  {firstName: "Kiera", lastName: "VonRueden", country: "US", age: 97},
  {firstName: "Mac", lastName: "Lubowitz", country: "Canada", age: 78},
  {firstName: "Janis", lastName: "Marvin", country: "IRL", age: 84},
  {firstName: "Carmen", lastName: "Herzog", country: "CAN", age: 76},
  {firstName: "Maia", lastName: "Hegmann", country: "England", age: 1},
  {firstName: "Susana", lastName: "Langworth", country: "CAN", age: 98},
  {firstName: "Curtis", lastName: "Rosenbaum", country: "IRL", age: 39},
  {firstName: "Ines", lastName: "Morar", country: "Canada", age: 88},
  {firstName: "Aron", lastName: "Jones", country: "IRL", age: 41},
  {firstName: "Moshe", lastName: "Ondricka", country: "IRL", age: 61},
  {firstName: "Felicia", lastName: "Turcotte", country: "Ireland", age: 36},
  {firstName: "Florencio", lastName: "Hudson", country: "IRL", age: 9},
  {firstName: "Victor", lastName: "Crooks", country: "UK", age: 28},
  {firstName: "George", lastName: "Lind", country: "England", age: 21},
  {firstName: "Madelynn", lastName: "Graham", country: "US", age: 16},
  {firstName: "Pat", lastName: "Zemlak", country: "UK", age: 95},
  {firstName: "Lexi", lastName: "Stoltenberg", country: "United States", age: 7},
  {firstName: "Brigitte", lastName: "Moen", country: "CAN", age: 83},
  {firstName: "Orville", lastName: "Harber", country: "US", age: 16},
  {firstName: "Yvonne", lastName: "Cremin", country: "Canada", age: 94},
  {firstName: "Casandra", lastName: "Wiegand", country: "CAN", age: 92},
  {firstName: "Noemie", lastName: "Lind", country: "CAN", age: 68},
  {firstName: "Lexie", lastName: "Spinka", country: "England", age: 10},
  {firstName: "Hassan", lastName: "Macejkovic", country: "IRL", age: 58},
  {firstName: "Keira", lastName: "Cronin", country: "UK", age: 79},
  {firstName: "Cassandre", lastName: "Blanda", country: "Canada", age: 78}
];

function countryName(people){
    if(people.country === "US") {
        return "United States";
    }else if(people.country === "CAN") {
        return "Canada";
    }else if(people.country === "IRL") {
        return "Ireland";
    }else if(people.country === "UK"){
        return "England";
    } else {
        return people.country
    };
};

people.map(function(people){
  return countryName(people);
}).map(function(country){
    var unitedStates = 0
    var canada = 0
    var england = 0
    var ireland = 0
if(country === "Unites States"){
    unitedStates += 1;
} else if (country === "Canada"){
    canada += 1;
} else if (country === "England"){
    england += 1;
} else if (country === "Ireland"){
    ireland += 1;
}
return {country: }
})



function addString(string) {
  return string = string.split("+").reduce(function(previous, current){
      return Number(previous) + Number(current);
   })
   
}

addString("10 + 20 + 50");


zipper = function(array1, array2) {
    var output = [];
    for (var i = 0 ; i < array1.length; i++) {
        output.push(array1[i], array2[i]);
    }
    console.log(output);
}

zipper([1,2,3], [4,5,6]);


 includedNumber = function(array, n) {

     for (var i=0; i < array.length; i++) {
         if(array[i] === n) {
             console.log("true")
         } else {
             console.log("false")
         }
     }
 }
 includedNumber([1,2,3,4], 4);


twoNumbersIncluded = function(array, n) {

}

var tv = {
    currentChannel: null,
    on: false,
    turnOn: function() {
        this.on = true;
    },
    turnOff: function() {
        this.on = false;
    },
    changeChannel: function(newChannel) {
        this.currentChannel = newChannel;
        return this.currentChannel;
    },
};

var laptop = {
    asleep: false,
    on: true,
    numberOfDaysSinceLastRestart: null,
    turnOff: function() {
        this.on = false;
        this.numberOfDaysSinceLastRestart = 0;
        this.asleep = false;
    }
};


var coffeeMug = {
    full: true,
    capacityInOz: 20,
    color: "white",
    toFill: function() {
        this.full = true;
    },
    toEmpty: function() {
        this.full = false;
    }

};


reverseString = function(str) {
    return str.split("").reverse().join("");
},

reverseArray = function(arr) {
    return arr.split("").reverse().join([]);
}

var reverseArray = function (arr) {
    var output = [];
    for(var i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i])
    }
    return output
}

 function flexString() {
     var delimiter = arguments.length % 2 == 0 ? ',' : '|';
     var result = [];
     for (var i = 0; i < arguments.length; i++) {
         result.push(arguments[i]);
     }
     return result.join(delimiter);
}





