var arr = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (count % 3 === 0) {
      arr.push("Fizz");
    } else if (count % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(count);
    }

    count++;
  }

  console.log(arr);
}

function beer() {
  while (count <= 100) {
    console.log(count + "bottles of beer on the wall");
    count++;
  }
}

// exercise: given an array of names select a name from the names and print a statement

function whosPaying(names) {
  var numberOfPeoples = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeoples);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today";
}
